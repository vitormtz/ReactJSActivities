// Importa os hooks necessários do React
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Estados para controlar o timer
  const [initialTime, setInitialTime] = useState(""); // Tempo inicial em segundos
  const [timeLeft, setTimeLeft] = useState(0); // Tempo restante
  const [isRunning, setIsRunning] = useState(false); // Estado de execução do timer
  const [showAlert, setShowAlert] = useState(false); // Controle do alerta de tempo esgotado

  // Effect para gerenciar o contador regressivo
  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsRunning(false);
            setShowAlert(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(interval);
  }, [isRunning]);

  // Função para formatar o tempo em minutos:segundos
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Função para iniciar o timer
  const startTimer = (e) => {
    e.preventDefault();
    if (initialTime && !isNaN(initialTime)) {
      setTimeLeft(parseInt(initialTime));
      setIsRunning(true);
      setShowAlert(false);
    }
  };

  // Função para pausar/continuar o timer
  const toggleTimer = () => setIsRunning(!isRunning);

  // Função para resetar o timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInitialTime("");
    setShowAlert(false);
  };

  // Objeto com os estilos do componente
  const styles = {
    // Container principal
    container: {
      maxWidth: "24rem",
      margin: "0 auto",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
    },
    // Formulário de input
    form: {
      display: "flex",
      gap: "0.5rem",
      width: "100%",
    },
    // Campo de input
    input: {
      flex: 1,
      padding: "0.75rem",
      borderRadius: "0.375rem",
      border: "1px solid #e2e8f0",
      fontSize: "1rem",
    },
    // Estilo base dos botões
    button: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "0.375rem",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.2s",
    },
    // Display do timer
    display: {
      fontFamily: "monospace",
      fontSize: "3rem",
      fontWeight: "bold",
    },
    // Container dos controles
    controls: {
      display: "flex",
      gap: "0.5rem",
    },
    // Alerta de tempo esgotado
    alert: {
      padding: "1rem",
      backgroundColor: "#fee2e2",
      color: "#991b1b",
      borderRadius: "0.375rem",
      width: "100%",
      textAlign: "center",
    },
  };

  return (
    // Container principal
    <div style={styles.container}>
      {/* Formulário para definir o tempo inicial */}
      <form onSubmit={startTimer} style={styles.form}>
        <input
          type="number"
          value={initialTime}
          onChange={(e) => setInitialTime(e.target.value)}
          placeholder="Digite os segundos"
          min="1"
          style={styles.input}
          disabled={isRunning || timeLeft > 0}
        />
        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: isRunning || timeLeft > 0 ? 0.7 : 1,
            cursor: isRunning || timeLeft > 0 ? "not-allowed" : "pointer",
          }}
          disabled={isRunning || timeLeft > 0}
        >
          Iniciar
        </button>
      </form>

      {/* Display do timer */}
      <div style={styles.display}>{formatTime(timeLeft)}</div>

      {/* Botões de controle (visíveis apenas quando há tempo restante) */}
      {timeLeft > 0 && (
        <div style={styles.controls}>
          {/* Botão de pausar/continuar */}
          <button
            onClick={toggleTimer}
            style={{
              ...styles.button,
              backgroundColor: isRunning ? "#dc2626" : "#2563eb",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = isRunning
                ? "#b91c1c"
                : "#1d4ed8";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = isRunning
                ? "#dc2626"
                : "#2563eb";
            }}
          >
            {isRunning ? "Pausar" : "Continuar"}
          </button>

          {/* Botão de reiniciar */}
          <button
            onClick={resetTimer}
            style={{
              ...styles.button,
              backgroundColor: "#64748b",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#475569";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#64748b";
            }}
          >
            Reiniciar
          </button>
        </div>
      )}

      {/* Alerta de tempo esgotado */}
      {showAlert && <div style={styles.alert}>Tempo esgotado!</div>}
    </div>
  );
};

// Exporta o componente CountdownTimer
export default CountdownTimer;
