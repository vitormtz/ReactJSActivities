// Importa o hook useState do React
import { useState } from "react";

const SignupForm = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Estado para armazenar os erros de validação
  const [errors, setErrors] = useState({});
  // Estado para controlar se o formulário foi enviado com sucesso
  const [submitted, setSubmitted] = useState(false);

  // Objeto com todos os estilos do componente
  const styles = {
    // Estilo do container principal
    container: {
      maxWidth: "24rem",
      margin: "0 auto",
      padding: "1.5rem",
    },
    // Estilo do grupo de cada campo do formulário
    formGroup: {
      marginBottom: "1rem",
    },
    // Estilo das labels dos campos
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    // Estilo base dos inputs
    input: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "0.375rem",
      border: "1px solid #e2e8f0",
      fontSize: "1rem",
      transition: "border-color 0.2s",
    },
    // Estilo para inputs com erro
    errorInput: {
      borderColor: "#ef4444",
    },
    // Estilo para mensagens de erro
    errorText: {
      color: "#ef4444",
      fontSize: "0.75rem",
      marginTop: "0.25rem",
    },
    // Estilo do botão de submit
    button: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "0.375rem",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    // Estilo da mensagem de sucesso
    successMessage: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "#bbf7d0",
      borderRadius: "0.375rem",
      color: "#166534",
    },
  };

  // Função para validar os campos do formulário
  const validate = () => {
    const newErrors = {};

    // Validação do campo nome
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    // Validação do campo email
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validação do campo senha
    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Atualiza o estado do formulário
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpa o erro do campo que está sendo editado
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    // Container principal do formulário
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* Campo de nome */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              ...styles.input,
              ...(errors.name ? styles.errorInput : {}),
            }}
          />
          {errors.name && <span style={styles.errorText}>{errors.name}</span>}
        </div>

        {/* Campo de email */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              ...styles.input,
              ...(errors.email ? styles.errorInput : {}),
            }}
          />
          {errors.email && <span style={styles.errorText}>{errors.email}</span>}
        </div>

        {/* Campo de senha */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              ...styles.input,
              ...(errors.password ? styles.errorInput : {}),
            }}
          />
          {errors.password && (
            <span style={styles.errorText}>{errors.password}</span>
          )}
        </div>

        {/* Botão de submit com efeito hover */}
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
          Cadastrar
        </button>
      </form>

      {/* Mensagem de sucesso exibida após o envio do formulário */}
      {submitted && (
        <div style={styles.successMessage}>
          Olá {formData.name}! Seu cadastro foi realizado com sucesso.
        </div>
      )}
    </div>
  );
};

// Exporta o componente SignupForm
export default SignupForm;
