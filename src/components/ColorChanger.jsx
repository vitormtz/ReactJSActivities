// Importa os hooks necessários do React
import { useState, useEffect } from "react";

const ColorChanger = () => {
  // Estado para armazenar a cor de fundo atual
  const [backgroundColor, setBackgroundColor] = useState("rgb(83, 148, 161)");

  // Função para gerar uma cor hexadecimal aleatória
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Effect para atualizar a cor de fundo do body quando backgroundColor mudar
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    // Cleanup function para resetar a cor quando o componente desmontar
    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, [backgroundColor]);

  return (
    // Container principal centralizado
    <div
      style={{
        display: "flex",
        minHeight: "20vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Botão para mudar a cor de fundo */}
      <button
        onClick={() => setBackgroundColor(generateRandomColor())}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.125rem",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "0.375rem",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "transform 0.2s",
        }}
        // Efeitos de hover para o botão
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Mudar Cor de Fundo
      </button>
    </div>
  );
};

// Exporta o componente ColorChanger
export default ColorChanger;
