// Importa os hooks necessários do React
import { useState, useEffect } from "react";

const PostsList = () => {
  // Estados para gerenciar os posts, loading e erros
  const [posts, setPosts] = useState([]); // Array de posts
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  // Objeto com os estilos do componente
  const styles = {
    // Container principal
    container: {
      maxWidth: "48rem",
      margin: "0 auto",
      padding: "1.5rem",
    },
    // Cabeçalho com título e botão
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    // Estilo do título
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    // Estilo do botão
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "0.375rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    // Estilo do spinner de carregamento
    loadingSpinner: {
      width: "1rem",
      height: "1rem",
      border: "2px solid #f3f3f3",
      borderTop: "2px solid #2563eb",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    // Estilo do card de post
    postCard: {
      padding: "1.5rem",
      backgroundColor: "white",
      borderRadius: "0.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      marginBottom: "1rem",
    },
    // Estilo do título do post
    postTitle: {
      fontSize: "1.25rem",
      fontWeight: "500",
      marginBottom: "0.5rem",
    },
    // Estilo do corpo do post
    postBody: {
      color: "#4b5563",
    },
    // Estilo da mensagem de erro
    error: {
      padding: "1rem",
      backgroundColor: "#fee2e2",
      color: "#991b1b",
      borderRadius: "0.375rem",
      marginBottom: "1rem",
    },
    // Container do spinner de carregamento
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "3rem",
    },
  };

  // Função assíncrona para buscar posts da API
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar posts");
      }
      const data = await response.json();
      setPosts(data.slice(0, 10)); // Pega apenas os 10 primeiros posts
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect para carregar os posts quando o componente monta
  useEffect(() => {
    fetchPosts();
  }, []);

  // Adiciona a animação do spinner ao styleSheet se ainda não existir
  const styleSheet = document.styleSheets[0];
  if (!document.querySelector("style[data-spinner]")) {
    const spinnerStyle = document.createElement("style");
    spinnerStyle.setAttribute("data-spinner", "true");
    spinnerStyle.textContent = `
     @keyframes spin {
       0% { transform: rotate(0deg); }
       100% { transform: rotate(360deg); }
     }
   `;
    document.head.appendChild(spinnerStyle);
  }

  return (
    // Container principal
    <div style={styles.container}>
      {/* Cabeçalho com título e botão de recarregar */}
      <div style={styles.header}>
        <h2 style={styles.title}>Posts</h2>
        <button
          onClick={fetchPosts}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? (
            <>
              <div style={styles.loadingSpinner} />
              Carregando...
            </>
          ) : (
            "Recarregar"
          )}
        </button>
      </div>

      {/* Exibe mensagem de erro se houver */}
      {error && <div style={styles.error}>{error}</div>}

      {/* Renderiza spinner de loading ou lista de posts */}
      {loading ? (
        <div style={styles.loadingContainer}>
          <div
            style={{
              ...styles.loadingSpinner,
              width: "2rem",
              height: "2rem",
            }}
          />
        </div>
      ) : (
        // Lista de posts
        <div>
          {posts.map((post) => (
            <div key={post.id} style={styles.postCard}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postBody}>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Exporta o componente PostsList
export default PostsList;
