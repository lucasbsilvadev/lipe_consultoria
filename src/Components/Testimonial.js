import React, { useState, useEffect, useCallback } from "react"; // ← ADICIONE useCallback
import BeforeAfter2 from "../Assets/buitrago_result.jpeg";
import BeforeAfter3 from "../Assets/resultado_atleta3.jpeg";
import BeforeAfter4 from "../Assets/resultado_fem.jpeg";
import BeforeAfter5 from "../Assets/kayo_resultado.jpeg";

const Results = () => {
  const resultsData = [
    {
      image: BeforeAfter2,
      name: "@",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter3,
      name: "@",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter4,
      name: "@",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter5,
      name: "@",
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
    }, 3000);

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
          <h2>{resultsData[currentIndex].name}</h2>
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