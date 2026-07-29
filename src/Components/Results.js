import React, { useState, useEffect, useCallback } from "react"; 
import BeforeAfter2 from "../Assets/results/buitrago_result.jpeg";
import BeforeAfter3 from "../Assets/results/resultado_atleta3.jpeg";
import BeforeAfter4 from "../Assets/results/resultado_fem.jpeg";
import BeforeAfter5 from "../Assets/results/kayo_resultado.jpeg";
import BeforeAfter6 from "../Assets/results/aluno_result.jpeg";
import BeforeAfter7 from "../Assets/results/resultado_fem2.jpeg"

const Results = () => {
  const resultsData = [
    {
      image: BeforeAfter2,
      type: "Atleta",
      focus: "Objetivo:" - "Cutting",
      hashtag: "#TeamSaboia"
    },
    {
      image: BeforeAfter3,
      type: "Atleta",
      focus: "Objetivo:" - "Ganho de massa",
      hashtag: "#TeamSaboia"
    },
    {
      image: BeforeAfter4,
      type: "Aluna",
      focus: "Objetivo:" - "Ganho de massa",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter5,
      type: "Atleta",
      focus: "Objetivo:" + "Preparação",
      result: "Top 1",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter6,
      type: "Atleta",
      focus: "Objetivo:" + "Cutting",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter7,
      type: "Atleta",
      focus: "Objetivo:" + "Ganho de Massa",
      hashtag: "#TeamSaboia",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Defina a função UMA VEZ só
  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => prevIndex === resultsData.length - 1 ? 0 : prevIndex + 1
    );
  }, [resultsData.length]); 

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => prevIndex === 0 ? resultsData.length - 1 : prevIndex - 1
    );
  }, [resultsData.length]);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleCtaClick = () => {
    const message = encodeURIComponent("Olá! Quero ser o próximo resultado de sucesso do Team Saboia!");
    window.open(`https://wa.me/5561995909917?text=${message}`, '_blank');
  };

  return (
    <div className="results-section-wrapper" id="results" data-animate="fade-up" data-delay="200">
      <div className="results-section-top" style={{ textAlign: 'center' }}>
        <h1 className="primary-heading" style={{ margin: '0 auto' }}>Resultados Reais</h1>
        <p className="primary-text" style={{ margin: '2rem auto' }}>
          Do iniciante ao atleta de alta performance
        </p>
      </div>

      <div className="results-carousel">
        <button className="carousel-btn left" onClick={prevSlide}>
          {"<"}
        </button>

        <div className="results-slide">
          <img
            src={resultsData[currentIndex].image}
            alt={resultsData[currentIndex].name}
          />
          <h2>{resultsData[currentIndex].type}</h2>
          <h3>{resultsData[currentIndex].focus}</h3>
          <p>{resultsData[currentIndex].hashtag}</p>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          {">"}
        </button>
      </div>

      <div className="carousel-indicators">
        {resultsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      <div className="results-cta">
        <button className="cta-button" onClick={handleCtaClick}>
          QUERO SER O PRÓXIMO
        </button>
      </div>
    </div>
  );
};

export default Results;