import express from "express";
import { PrismaClient } from "@prisma/client";
import { z, ZodError } from "zod";
import { ContactCreateSchemas } from "./schemas/contact.schemas.js";

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

//Listar todos os contatos
app.get("/contacts", async (req, res) => {
  const contacts = await prisma.contact.findMany();
  res.json(contacts);
});

//Criar um novo contato
app.post("/contacts", async (req, res) => {
  try {
    const data = ContactCreateSchemas.parse(req.body);

    const novoContact = await prisma.contact.create({
      data: data,
    });

    return res.status(201).json(novoContact);
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        mensagem: "Os dados sao invalidos",
        errors: error.errors,
      });
    }
    if (error instanceof Error && "code" in error && error.code === "P2002") {
      return res
        .status(409)
        .json({ mensagem: "Esse E-mail ja possui cadastro." });
    }

    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

// ROTA: Teste da API
app.get("/", (req, res) => {
  res.send("Api funcionando, contatos");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
