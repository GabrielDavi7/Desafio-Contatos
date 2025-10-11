import { useState, useEffect } from "react";
import ContactForm from "./components/ContactFormulario";
import "./App.css";
import { FaTrash, FaEdit } from "react-icons/fa";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0);
  const [editContact, setEditContact] = useState<Contact | null>(null);
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const pageSize = 10;

  // 🔁 Reaproveitável para recarregar dados da API
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:3000/contacts?q=${searchTerm}&page=${page}&pageSize=${pageSize}&sort=${sortField}&order=${sortOrder}`;
      const response = await fetch(url);
      const result = await response.json();
      setContacts(result.data);
      setTotalContacts(result.total);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🧠 UseEffect com debounce
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchContacts();
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm, page, sortField, sortOrder]);

  // 🔽 Função para alternar ordenação
  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // ✅ Quando novo contato é criado
  const handleContactCreated = () => {
    setEditContact(null);
    setPage(1);
    fetchContacts();
  };

  // ✅ Quando contato é editado
  const handleContactUpdated = (updatedContact: Contact | null) => {
    if (updatedContact) {
      setContacts((prev) =>
        prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
      );
    }
    setEditContact(null);
  };

  // 🗑️ Deletar contato
  const handleContactDelete = async (contactId: string) => {
    const confirm = window.confirm("Tem certeza que deseja excluir?");
    if (!confirm) return;

    try {
      const response = await fetch(
        `http://localhost:3000/contacts/${contactId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== contactId));
        setTotalContacts((prev) => prev - 1);
      } else {
        console.error("Erro ao excluir contato.");
      }
    } catch (error) {
      console.error("Erro de rede ao excluir:", error);
    }
  };

  const totalPages = Math.ceil(totalContacts / pageSize);

  return (
    <div className="app-container">
      {/* --- LADO ESQUERDO: FORMULÁRIO --- */}
      <ContactForm
        onContactCreat={handleContactCreated}
        onContactUpdated={handleContactUpdated}
        editingContact={editContact}
      />

      {/* --- LADO DIREITO: LISTA DE CONTATOS (CARDS) --- */}
      <div className="user-list">
        <h2>Usuários Cadastrados</h2>

        <input
          type="text"
          placeholder="Buscar por nome ou e-mail..."
          value={searchTerm}
          onChange={(e) => {
            setPage(1);
            setSearchTerm(e.target.value);
          }}
          className="search-input"
        />

        <div className="sort-buttons">
          <button onClick={() => handleSort("name")}>
            Nome {sortField === "name" && (sortOrder === "asc" ? "🔼" : "🔽")}
          </button>
          <button onClick={() => handleSort("email")}>
            Email {sortField === "email" && (sortOrder === "asc" ? "🔼" : "🔽")}
          </button>
        </div>

        {loading ? (
          <p>Carregando...</p>
        ) : contacts.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact.id} className="user-card">
              <div className="user-info">
                <p>
                  <strong>Nome:</strong> {contact.name}
                </p>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Telefone:</strong> {contact.phone || "N/A"}
                </p>
              </div>

              <div className="card-actions">
                <button onClick={() => setEditContact(contact)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleContactDelete(contact.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}

        {/* Paginação */}
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
            Anterior
          </button>
          <span>
            Página {page} de {totalPages || 1}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
