import React from "react";
import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

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
              <FiMail />
              <span>contato@teamsaboia.com</span>
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
              <div className="sponsor-logo bulking">BULKING</div>
              <p>Use cupom: <strong>SABOIA</strong></p>
              <span>Suplementos de qualidade</span>
            </div>
            
            <div className="sponsor-item">
              <div className="sponsor-logo php">PHP NUTRITION</div>
              <p>Suplementos premium</p>
              <span>Alta performance</span>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2024 Team Saboia. Todos os direitos reservados.</span>
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