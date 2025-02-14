// Importa o hook useState do React para gerenciar estados do componente
import { useState } from "react";

const TodoList = () => {
  // Estados para gerenciar a lista de tarefas, nova tarefa e filtro de visualização
  const [tasks, setTasks] = useState([]); // Array de tarefas
  const [newTask, setNewTask] = useState(""); // Texto da nova tarefa
  const [showPending, setShowPending] = useState(false); // Controle do filtro de tarefas pendentes

  // Objeto com todos os estilos do componente
  const styles = {
    // Estilo do container principal
    container: {
      maxWidth: "32rem",
      margin: "0 auto",
      padding: "1.5rem",
    },
    // Estilo do formulário de adição de tarefas
    form: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    // Estilo do campo de input
    input: {
      flex: 1,
      padding: "0.5rem",
      border: "1px solid #e2e8f0",
      borderRadius: "0.25rem",
      fontSize: "1rem",
    },
    // Estilo do botão de adicionar tarefa
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.2s",
    },
    // Estilo do botão de filtro
    filterButton: {
      padding: "0.5rem 1rem",
      backgroundColor: "#64748b",
      color: "white",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      marginBottom: "1rem",
      fontSize: "1rem",
      transition: "background-color 0.2s",
    },
    // Estilo do container de cada tarefa
    taskItem: {
      display: "flex",
      alignItems: "center",
      padding: "0.75rem",
      backgroundColor: "white",
      borderRadius: "0.25rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      marginBottom: "0.5rem",
      gap: "0.5rem",
    },
    // Estilo do checkbox de tarefa
    checkbox: {
      width: "1.25rem",
      height: "1.25rem",
      cursor: "pointer",
    },
    // Estilo do texto da tarefa
    taskText: {
      flex: 1,
      fontSize: "1rem",
    },
    // Estilo do botão de remover tarefa
    deleteButton: {
      padding: "0.25rem 0.5rem",
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      fontSize: "0.875rem",
      transition: "background-color 0.2s",
    },
  };

  // Função para adicionar uma nova tarefa
  const addTask = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (newTask.trim()) {
      // Verifica se a tarefa não está vazia
      setTasks([
        ...tasks,
        {
          id: Date.now(), // Cria ID único usando timestamp
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask(""); // Limpa o campo de input após adicionar
    }
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para remover uma tarefa
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Filtra as tarefas com base no estado showPending
  const filteredTasks = showPending
    ? tasks.filter((task) => !task.completed)
    : tasks;

  return (
    // Container principal
    <div style={styles.container}>
      {/* Formulário para adicionar novas tarefas */}
      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa..."
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#1d4ed8";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#2563eb";
          }}
        >
          Adicionar
        </button>
      </form>

      {/* Botão para alternar entre todas as tarefas e apenas pendentes */}
      <button
        onClick={() => setShowPending(!showPending)}
        style={styles.filterButton}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#475569";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#64748b";
        }}
      >
        {showPending ? "Mostrar Todas" : "Mostrar Pendentes"}
      </button>

      {/* Lista de tarefas */}
      <div>
        {filteredTasks.map((task) => (
          <div key={task.id} style={styles.taskItem}>
            {/* Checkbox para marcar tarefa como concluída */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={styles.checkbox}
            />
            {/* Texto da tarefa com estilo condicional baseado no estado de conclusão */}
            <span
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#94a3b8" : "#1e293b",
              }}
            >
              {task.text}
            </span>
            {/* Botão para remover a tarefa */}
            <button
              onClick={() => removeTask(task.id)}
              style={styles.deleteButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#dc2626";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#ef4444";
              }}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta o componente TodoList
export default TodoList;
