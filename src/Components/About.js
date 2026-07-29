import React from "react";
import AboutBackgroundImage from "../Assets/lipe_champion.jpg";

const About = () => {
  const handleMetodologiaClick = () => {
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
          <h1 className="about-heading">Transformação além do físico</h1>
          
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="Luís Felipe Sabóia - Atleta Wolfgang" />
          </div>
          
          <div className="about-section-text-container">
            <p className="about-text">
              Sou Luis Felipe Sabóia, profissional de Educação Física, atleta e treinador. Uno ciência do treinamento, periodização estratégica e dietética aplicada à <span className="Highlight">prática real — tanto na minha própria preparação quanto na evolução dos meus alunos. </span> 
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