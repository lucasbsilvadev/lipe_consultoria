import React from "react";
import { FiInstagram, FiPhone, FiMapPin } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import logobulking from "../Assets/partners/bulking.png";
import logoworld from "../Assets/partners/worldgym.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper" data-animate="fade-right" data-delay="200">
      <div className="footer-content">
        
        {/* Seção Principal */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">WOLF GANG</h3>
            <p className="footer-tagline">#TeamSaboia</p>
            <p className="footer-description">
              Transformação física através de metodologia científica e acompanhamento personalizado.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <div className="contact-item">
              <FiPhone />
              <span>+55 (61) 99590-9917</span>
            </div>
            <div className="contact-item">
              <FiMapPin />
              <span>Brasília, Brasil</span>
            </div>
          </div>

          <div className="footer-social">
            <h4>Siga nas Redes</h4>
            <div className="social-icons">
              <a 
                href="https://instagram.com/luissaboia.ofc " 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FiInstagram />
                <span>Instagram</span>
              </a>
              <a 
                href="https://wa.me/55619995909917" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <SiWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* seção de patrocinadores */}
         <div className="footer-sponsors">
          <h4>Parceiros Oficiais</h4>
          <div className="sponsors-grid">
            <div className="sponsor-item">
              <strong>Bulking - Roupas </strong>
              <img 
                src={logobulking} 
                alt="Bulking Suplementos" 
                className="sponsor-logo"
              />
              <p>Use o cupom: <strong>SABOIA</strong></p>
              <span>Roupas de academia - Fashion Fitness</span>
            </div>
            
            <div className="sponsor-item">
              <strong>World Gym - Sobradinho</strong>
              <img 
                src={logoworld} 
                alt="World Gym" 
                className="sponsor-logo"
              />
              <span>Junte-se ao time e <strong> ganhe desconto na matrícula</strong></span>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2026 Team Saboia. Todos os direitos reservados.</span>
            <div className="legal-links">
              <a href="#powered-by">Powered by</a>
              <a href="#liberstack">liberstack</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;