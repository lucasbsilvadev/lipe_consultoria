import React, { useState, useEffect } from "react";
import BannerImage from "../Assets/home/lipe-hero.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 10, text: "pódios como treinador", prefix: "+", suffix: "" },
    { id: 2, value: 0, target: 3, text: "atletas no TOP 1", prefix: "+", suffix: "" },
    { id: 3, value: 0, target: 3, text: "Top 1 Men's Physique", prefix: "+", suffix: "x" }
  ]);

  useEffect(() => {

    const interval = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map(counter => {
          if (counter.value < counter.target) {
            const increment = Math.ceil(counter.target / 25);
            return { 
              ...counter, 
              value: Math.min(counter.value + increment, counter.target) 
            };
          }

          return counter;
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleSaibaMaisClick = () => {
    // Leva para a seção de consultoria
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container" id="home" data-animate="fade-right" data-delay="200">
      <Navbar />
      <div className="home-banner-container" data-animate="fade-up" data-delay="200">
       <h1 className="primary-heading">
            Junte-se à <span className="Highlight">equipe </span> 
            e transforme <span className="Highlight"> seu físico </span> 
          </h1>
           <div className="home-image-section">
          <img className="hero-image" src={BannerImage} alt="Luís Felipe Sabóia" />
        </div>
        <div className="home-text-section">

          <p className="primary-text">
            Consultoria esportiva de <span className="Highlight">alto rendimento </span> com <span className="Highlight">Luís Sabóia,</span> atleta e
            treinador com <span className="Highlight">acompanhamento especializado do iniciante ao fisiculturista.</span>
          </p>

          <button className="secondary-button" onClick={handleSaibaMaisClick}>
            Saiba mais <FiArrowRight />
          </button>

          {/* Seção de Indicadores */}
          <div className="achievements-section">
            <div className="achievements-grid">
              {counters.map(counter => (
                <div key={counter.id} className="achievement-item">
                  <div className="achievement-number">
                    {counter.prefix}
                    <span className="counter-value">{counter.value}</span>
                    {counter.suffix}
                  </div>
                  <div className="achievement-text">{counter.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;