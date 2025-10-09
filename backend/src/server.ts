import express from "express";
import { PrismaClient } from "@prisma/client";
import { z, ZodError } from "zod";
import {
  ContactAtualizaSchemas,
  ContactCreateSchemas,
} from "./schemas/contact.schemas.js";

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

//Listar todos os contatos
app.get("/contacts", async (req, res) => {
  const contacts = await prisma.contact.findMany();
  res.json(contacts);
});

//Criar um novo contact
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

//Atualizar o contact
app.put("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = ContactAtualizaSchemas.parse(req.body);

    const ContactAtualiza = await prisma.contact.update({
      where: {
        id: id,
      },
      data: data,
    });
    return res.status(200).json(ContactAtualiza);
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        mensagem: "Os dados para atualizacao nao sao validos",
        errors: error.errors,
      });
    }

    if (error instanceof Error && "code" in error && error.code === "P2025") {
      return res.status(409).json({ mensagem: "Contact nao encontrado" });
    }

    if (error instanceof Error && "code" in error && error.code === "2002") {
      return res
        .status(409)
        .json({ mensagem: "Esse email esta em uso por outro contact" });
    }

    return res.status(500).json({ mensagem: "Erro interno do servido" });
  }
});

//Deletar o contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.contact.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ mensagem: "Contact deletado" });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "P2025") {
      return res.status(409).json({ mensagem: "Contact nao encontrado" });
    }
    return res.status(500).json({ mensagem: "Erro interno do servido" });
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
