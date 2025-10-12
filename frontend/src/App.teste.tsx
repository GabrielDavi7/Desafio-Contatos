import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

//teste da frontend
describe("App Component", () => {
  it('deve renderizar o título principal "Lista de Contatos"', () => {
    render(<App />);

    // 2. Procura por um elemento na tela que tenha o texto "Lista de Contatos"
    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /lista de contatos/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
