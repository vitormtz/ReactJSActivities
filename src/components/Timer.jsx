// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";

const Timer = () => {
  // Estado para controlar os segundos do timer
  const [seconds, setSeconds] = useState(0);
  // Estado para controlar se o timer está rodando
  const [isRunning, setIsRunning] = useState(true);

  // Effect para controlar o intervalo do timer
  useEffect(() => {
    let interval;

    // Se o timer estiver rodando, cria um intervalo que incrementa os segundos
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Função de cleanup que limpa o intervalo quando o componente desmonta
    return () => clearInterval(interval);
  }, [isRunning]); // Executa o effect quando isRunning muda

  // Função para alternar entre timer rodando/pausado
  const toggleTimer = () => setIsRunning(!isRunning);
  // Função para resetar o timer para 0 e pausá-lo
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // Função para formatar o tempo em minutos:segundos
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Estilo base para os botões
  const buttonStyle = {
    padding: "0.5rem 1rem",
    margin: "0 0.25rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
    color: "white",
  };

  return (
    // Container principal com layout em coluna e centralizado
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1.5rem",
      }}
    >
      {/* Display do timer com fonte monoespaçada */}
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        {formatTime(seconds)}
      </div>

      {/* Container dos botões */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {/* Botão de Iniciar/Pausar que muda de cor baseado no estado */}
        <button
          onClick={toggleTimer}
          style={{
            ...buttonStyle,
            backgroundColor: isRunning ? "#dc2626" : "#2563eb",
          }}
        >
          {isRunning ? "Pausar" : "Iniciar"}
        </button>

        {/* Botão de Reiniciar */}
        <button
          onClick={resetTimer}
          style={{
            ...buttonStyle,
            backgroundColor: "#64748b",
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

// Exporta o componente Timer
export default Timer;
