// Importa o hook useState do React para gerenciar o estado do componente
import { useState } from "react";

// Componente funcional que implementa um filtro de nomes
const NameFilter = () => {
  // Estado para armazenar o valor do filtro, inicializado como string vazia
  const [filter, setFilter] = useState("");

  // Array de nomes que serão filtrados
  const names = [
    "Ana Silva",
    "Bruno Santos",
    "Carla Oliveira",
    "Daniel Lima",
    "Elena Costa",
    "Felipe Souza",
    "Gabriela Martins",
    "Hugo Ferreira",
    "Isabel Pereira",
    "João Rodriguez",
    "Karina Alves",
    "Lucas Mendes",
  ];

  // Filtra os nomes baseado no texto digitado, ignorando maiúsculas/minúsculas
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  // Objeto com os estilos inline para os elementos do componente
  const styles = {
    // Estilo do container principal
    container: {
      maxWidth: "32rem",
      margin: "0 auto",
      padding: "1.5rem",
    },
    // Estilo do campo de input
    input: {
      width: "100%",
      padding: "0.75rem",
      fontSize: "1rem",
      border: "1px solid #e2e8f0",
      borderRadius: "0.375rem",
      marginBottom: "1rem",
    },
    // Estilo da lista não ordenada
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    // Estilo dos itens da lista
    listItem: {
      padding: "0.75rem",
      borderRadius: "0.375rem",
      backgroundColor: "#121212",
      marginBottom: "0.5rem",
      transition: "background-color 0.2s",
    },
    // Estilo do contador de resultados
    counter: {
      fontSize: "0.875rem",
      color: "#E9F1F3",
      marginTop: "1rem",
    },
  };

  return (
    // Container principal do componente
    <div style={styles.container}>
      {/* Campo de input para filtrar os nomes */}
      <input
        type="text"
        placeholder="Filtrar nomes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.input}
      />

      {/* Lista de nomes filtrados */}
      <ul style={styles.list}>
        {/* Mapeia os nomes filtrados para elementos de lista */}
        {filteredNames.map((name, index) => (
          <li
            key={index}
            style={styles.listItem}
            // Eventos de mouse para hover (note que a cor não muda)
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#121212";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#121212";
            }}
          >
            {name}
          </li>
        ))}
      </ul>

      {/* Contador mostrando quantidade de nomes filtrados vs total */}
      <div style={styles.counter}>
        Exibindo {filteredNames.length} de {names.length} nomes
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default NameFilter;
