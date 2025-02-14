// Importa o hook useState do React para gerenciar o estado do componente
import { useState } from "react";

const Counter = () => {
  // Estado para armazenar o valor atual do contador, iniciando em 0
  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const increment = () => setCount(count + 1);
  // Função para decrementar o contador apenas se for maior que 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    // Container principal com flexbox em coluna e centralizado
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1.5rem",
      }}
    >
      {/* Título mostrando o valor atual do contador */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Contador: {count}
      </h2>

      {/* Container dos botões */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {/* Botão de incrementar */}
        <button
          onClick={increment}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Incrementar
        </button>

        {/* Botão de decrementar (desabilitado quando count é 0) */}
        <button
          onClick={decrement}
          disabled={count === 0}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: count === 0 ? "#94a3b8" : "#64748b",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: count === 0 ? "not-allowed" : "pointer",
          }}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};

// Exporta o componente Counter
export default Counter;
