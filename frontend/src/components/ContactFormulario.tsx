import { useState, useEffect } from "react";
import { ContactCreateSchemas as contactCreateSchema } from "../schemas/contact.schema";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
}

interface ContactProps {
  onContactCreat: (contact: Contact) => void;
  onContactUpdated: (contact: Contact | null) => void;
  editingContact: Contact | null;
}

function ContactForm({
  onContactCreat,
  onContactUpdated,
  editingContact,
}: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone || "");
      setErrors({});
    }
  }, [editingContact]);

  async function Submit(event: React.FormEvent) {
    event.preventDefault();

    const contactData = { name, email, phone };
    const validationResult = contactCreateSchema.safeParse(contactData);

    if (!validationResult.success) {
      const zodErrors: { [key: string]: string } = {};
      validationResult.error.issues.forEach((err) => {
        zodErrors[err.path[0]] = err.message;
      });
      setErrors(zodErrors);
      return;
    }

    setErrors({});

    if (editingContact) {
      // MODO EDIÇÃO
      try {
        const response = await fetch(
          `http://localhost:3000/contacts/${editingContact.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(validationResult.data),
          }
        );

        if (response.ok) {
          const updatedContact = await response.json();
          onContactUpdated(updatedContact);
          // Limpa o formulário após editar
          setName("");
          setEmail("");
          setPhone("");
        } else {
          console.error("Falha ao atualizar contato.");
        }
      } catch (error) {
        console.error("Erro de rede:", error);
      }
    } else {
      // MODO CRIAÇÃO
      try {
        const response = await fetch("http://localhost:3000/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validationResult.data),
        });

        if (response.ok) {
          const newContact: Contact = await response.json();
          onContactCreat(newContact);
          setName("");
          setEmail("");
          setPhone("");
        } else {
          console.error("Falha ao criar um novo contato.");
        }
      } catch (error) {
        console.log("Erro de rede: ", error);
      }
    }
  }

  return (
    <form onSubmit={Submit}>
      <h2>{editingContact ? "Editar Contato" : "Adicionar Novo Contato"}</h2>

      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button type="submit">
        {editingContact ? "Salvar Alterações" : "Confirmar"}
      </button>

      {editingContact && (
        <button type="button" onClick={() => onContactUpdated(null)}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default ContactForm;
