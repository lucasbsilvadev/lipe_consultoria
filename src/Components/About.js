import React from "react";
import AboutBackgroundImage from "../Assets/lipe_champion.jpg";

const About = () => {
  const handleMetodologiaClick = () => {
    // Leva para a seção de consultoria (work)
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-section-container" id="about" data-animate="fade-up" data-delay="200">
      <div className="section-container">
        <div className="about-section-content">
  
            <p className="primary-subheading">Sobre</p>
            
            <h1 className="primary-heading">
              Transformação além do físico
            </h1>
            
            <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="Luís Felipe Sabóia - Atleta Wolfgang" />
          </div>
          <div className="about-section-text-container">
          
            
            <p className="primary-text">
              Com metodologia científica e acompanhamento personalizado, Luís Sabóia desenvolve 
              atletas completos - fortes mentalmente e esteticamente evoluídos.
            </p>
            <p className="primary-text">
              Do iniciante ao atleta de alto rendimento, cada jornada é única e cada resultado 
              é fruto de dedicação, técnica e paixão pelo esporte.
            </p>
            <div className="about-buttons-container">
              <button className="secondary-button" onClick={handleMetodologiaClick}>
                Conheça a metodologia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;