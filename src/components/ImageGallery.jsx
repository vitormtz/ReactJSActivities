// Importa os hooks necessários do React
import { useState, useEffect } from "react";

const ImageGallery = () => {
  // Estado para controlar qual imagem está selecionada/ampliada
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Array com dados das imagens da galeria
  const images = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/525771995/pt/foto/id%C3%ADlico-paisagem-de-ver%C3%A3o-com-lago-na-montanha-alpes.jpg?s=2048x2048&w=is&k=20&c=cBsChREvwzq4ee5Q2sKxag0a4TXFpR9wtnuLuQMfUwg=",
      alt: "Imagem 1",
      description: "Descrição da imagem 1",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/1403626781/pt/foto/beautiful-mondsee-austria-pictures.jpg?s=2048x2048&w=is&k=20&c=WDGGStANZ0OWxr2PpEMOEXTy7j-a3wr8L8wz_pTeE4M=",
      alt: "Imagem 2",
      description: "Descrição da imagem 2",
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/488357266/pt/foto/id%C3%ADlico-paisagem-de-alpes-com-flores-e-verdes-prados.jpg?s=2048x2048&w=is&k=20&c=IdYb7SK8cmY59go9v_UiaEypRkych44kKtR_l5g0RXU=",
      alt: "Imagem 3",
      description: "Descrição da imagem 3",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/1157654477/pt/foto/the-village-of-innerthal-in-the-valley-of-wagital-or-waegital-and-by-the-alpine-lake.jpg?s=2048x2048&w=is&k=20&c=O-9Ztv0-H2V-ER0Zte34dl5PagDHz703DNupGZYR4Ks=",
      alt: "Imagem 4",
      description: "Descrição da imagem 4",
    },
    {
      id: 5,
      src: "https://media.istockphoto.com/id/1342058017/pt/foto/auronzo-lake-and-town-in-summer-season-italian-alps.jpg?s=2048x2048&w=is&k=20&c=cnJuxVIkdFg55jWGahOVl0bQ-eoGmq31HLzU3ehk1iI=",
      alt: "Imagem 5",
      description: "Descrição da imagem 5",
    },
    {
      id: 6,
      src: "https://media.istockphoto.com/id/638034754/pt/foto/lovely-forested-mountains.jpg?s=2048x2048&w=is&k=20&c=NN15byMrhGb-5xLv-0qhCDIccGGEpjid2Khh4luVLdo=",
      alt: "Imagem 6",
      description: "Descrição da imagem 6",
    },
  ];

  // Função para navegar para imagem anterior
  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Função para navegar para próxima imagem
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Effect para adicionar controles de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          setSelectedIndex(null);
          break;
        default:
          break;
      }
    };

    // Adiciona event listener para teclas
    window.addEventListener("keydown", handleKeyDown);
    // Remove event listener quando componente desmonta
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Objeto com estilos do componente
  const styles = {
    // Estilo do container principal
    container: {
      padding: "1.5rem",
    },
    // Estilo do grid de imagens
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "1rem",
      padding: "1rem",
    },
    // Estilo das thumbnails
    thumbnail: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "0.5rem",
      cursor: "pointer",
      transition: "transform 0.2s",
    },
    // Estilo do modal (overlay)
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    // Estilo do conteúdo do modal
    modalContent: {
      position: "relative",
      maxWidth: "90%",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // Estilo da imagem ampliada
    modalImage: {
      maxWidth: "100%",
      maxHeight: "80vh",
      objectFit: "contain",
    },
    // Estilo da descrição da imagem
    modalDescription: {
      color: "white",
      marginTop: "1rem",
      textAlign: "center",
    },
    // Estilo dos botões de navegação
    navigationButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s",
    },
    // Estilo do botão de fechar
    closeButton: {
      position: "absolute",
      top: "-2rem",
      right: 0,
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
  };

  return (
    // Container principal
    <div style={styles.container}>
      {/* Grid de thumbnails */}
      <div style={styles.grid}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedIndex(index)}
            style={styles.thumbnail}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>

      {/* Modal com imagem ampliada */}
      {selectedIndex !== null && (
        <div style={styles.modal} onClick={() => setSelectedIndex(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Botão de fechar */}
            <button
              style={styles.closeButton}
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Imagem ampliada */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              style={styles.modalImage}
            />

            {/* Descrição da imagem */}
            <p style={styles.modalDescription}>
              {images[selectedIndex].description}
            </p>

            {/* Botão de navegação anterior */}
            <button
              style={{
                ...styles.navigationButton,
                left: "-3rem",
              }}
              onClick={handlePrevious}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              ←
            </button>

            {/* Botão de navegação próxima */}
            <button
              style={{
                ...styles.navigationButton,
                right: "-3rem",
              }}
              onClick={handleNext}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Exporta o componente ImageGallery
export default ImageGallery;
