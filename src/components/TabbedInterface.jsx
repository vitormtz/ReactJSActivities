// Importa os hooks necessários do React
import { useState, useEffect } from "react";

const TabbedInterface = () => {
  // Estado para controlar qual aba está ativa
  const [activeTab, setActiveTab] = useState("about");
  // Estado para controlar a animação de transição entre abas
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array com dados das abas disponíveis
  const tabs = [
    {
      id: "about",
      label: "Sobre",
    },
    {
      id: "services",
      label: "Serviços",
    },
    {
      id: "contact",
      label: "Contato",
    },
  ];

  // Effect para controlar o tempo de transição entre abas
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Função para lidar com a mudança de aba
  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setIsTransitioning(true);
      setActiveTab(tabId);
    }
  };

  // Função que retorna o conteúdo baseado na aba ativa
  const getTabContent = (tabId) => {
    switch (tabId) {
      // Conteúdo da aba "Sobre"
      case "about":
        return (
          <div>
            <h2 style={styles.contentTitle}>Sobre Nossa Empresa</h2>
            <p style={styles.paragraph}>
              Somos uma empresa inovadora focada em criar soluções digitais que
              transformam a maneira como as pessoas trabalham e vivem.
            </p>
            <p style={styles.paragraph}>
              Fundada em 2020, nossa missão é tornar a tecnologia mais acessível
              e intuitiva para todos.
            </p>
            {/* Seção de destaques com números */}
            <div style={styles.highlights}>
              <div style={styles.highlightItem}>
                <span style={styles.highlightNumber}>50+</span>
                <span style={styles.highlightLabel}>Clientes</span>
              </div>
              <div style={styles.highlightItem}>
                <span style={styles.highlightNumber}>100+</span>
                <span style={styles.highlightLabel}>Projetos</span>
              </div>
              <div style={styles.highlightItem}>
                <span style={styles.highlightNumber}>17</span>
                <span style={styles.highlightLabel}>Avaliações</span>
              </div>
            </div>
          </div>
        );

      // Conteúdo da aba "Serviços"
      case "services":
        return (
          <div>
            <h2 style={styles.contentTitle}>Nossos Serviços</h2>
            {/* Grid de serviços */}
            <div style={styles.serviceGrid}>
              {[
                {
                  title: "Desenvolvimento Web",
                  description: "Sites e aplicações web modernas e responsivas",
                },
                {
                  title: "Apps Mobile",
                  description: "Aplicativos nativos para iOS e Android",
                },
                {
                  title: "UI/UX Design",
                  description: "Design de interfaces intuitivas e atraentes",
                },
                {
                  title: "Consultoria",
                  description: "Consultoria em transformação digital",
                },
              ].map((service, index) => (
                <div key={index} style={styles.serviceCard}>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      // Conteúdo da aba "Contato"
      case "contact":
        return (
          <div>
            <h2 style={styles.contentTitle}>Entre em Contato</h2>
            {/* Informações de contato */}
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <div>
                  <h3 style={styles.contactLabel}>Email</h3>
                  <p style={styles.contactValue}>contato@empresa.com</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div>
                  <h3 style={styles.contactLabel}>Telefone</h3>
                  <p style={styles.contactValue}>(11) 1234-5678</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div>
                  <h3 style={styles.contactLabel}>Endereço</h3>
                  <p style={styles.contactValue}>
                    Av. Paulista, 1000
                    <br />
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Objeto com todos os estilos do componente
  const styles = {
    // Estilos do container principal
    container: {
      maxWidth: "48rem",
      margin: "0 auto",
      padding: "2rem",
    },
    // Estilos da lista de abas
    tabList: {
      display: "flex",
      borderBottom: "2px solid #e2e8f0",
      marginBottom: "2rem",
    },
    // Estilos base para cada aba
    tab: {
      padding: "0.75rem 1.5rem",
      marginRight: "0.5rem",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      position: "relative",
      transition: "all 0.2s",
    },
    // Estilos adicionais para aba ativa
    activeTab: {
      color: "#2563eb",
      fontWeight: "500",
    },
    // Indicador visual da aba ativa
    activeIndicator: {
      position: "absolute",
      bottom: "-2px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "#2563eb",
      transform: "scaleX(1)",
      transition: "transform 0.2s",
    },
    // Demais estilos para diferentes elementos da interface
    contentTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#1e293b",
    },
    paragraph: {
      lineHeight: 1.6,
      marginBottom: "1rem",
    },
    highlights: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "2rem",
      padding: "2rem 0",
      borderTop: "1px solid #e2e8f0",
      borderBottom: "1px solid #e2e8f0",
    },
    highlightItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
    highlightNumber: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2563eb",
    },
    highlightLabel: {
      fontSize: "0.875rem",
    },
    serviceGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "1.5rem",
    },
    serviceCard: {
      padding: "1.5rem",
      backgroundColor: "#f8fafc",
      borderRadius: "0.5rem",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    serviceTitle: {
      fontSize: "1.125rem",
      fontWeight: "500",
      marginBottom: "0.5rem",
      color: "#1e293b",
    },
    serviceDescription: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#1E293B",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
    },
    contactIcon: {
      fontSize: "1.5rem",
    },
    contactLabel: {
      fontSize: "1rem",
      fontWeight: "500",
      color: "#1e293b",
      marginBottom: "0.25rem",
    },
    // Estilo para controlar a animação de transição
    content: {
      opacity: isTransitioning ? 0 : 1,
      transition: "opacity 0.3s ease-in-out",
    },
  };

  return (
    // Container principal
    <div style={styles.container}>
      {/* Lista de abas */}
      <div style={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            style={{
              ...styles.tab,
              ...(activeTab === tab.id ? styles.activeTab : {}),
            }}
            onMouseOver={(e) => {
              e.target.style.color =
                activeTab === tab.id ? "#2563eb" : "#1e293b";
            }}
            onMouseOut={(e) => {
              e.target.style.color =
                activeTab === tab.id ? "#2563eb" : "#64748b";
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
            {activeTab === tab.id && <div style={styles.activeIndicator} />}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba ativa */}
      <div style={styles.content}>{getTabContent(activeTab)}</div>
    </div>
  );
};

// Exporta o componente TabbedInterface
export default TabbedInterface;
