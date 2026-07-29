import React, { useState } from "react";
import { FiMessageSquare, FiPhone, FiMail, FiMapPin, FiUpload, FiCheckCircle, FiX } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    altura: "",
    peso: "",
    lesao: "",
    objetivo: "",
    foto: null
  });

  const [fotoPreview, setFotoPreview] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar tamanho do arquivo (5MB)
      if (file.size > 5 * 1024 * 1024) {
        showToast("Arquivo muito grande! Máximo 5MB.", "error");
        return;
      }
      
      setFormData({
        ...formData,
        foto: file
      });
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateWhatsAppMessage = () => {
    const { name, email, phone, altura, peso, lesao, objetivo } = formData;
    const text = `*FORMULÁRIO DE ANAMNESE - TEAM SABOIA*\n\n` +
      `*Dados Pessoais:*\n` +
      `👤 Nome: ${name || "Não informado"}\n` +
      `📧 Email: ${email || "Não informado"}\n` +
      `📱 Telefone: ${phone || "Não informado"}\n\n` +
      `*Dados Físicos:*\n` +
      `📏 Altura: ${altura || "Não informado"}\n` +
      `⚖️ Peso: ${peso || "Não informado"}\n\n` +
      `*Informações Adicionais:*\n` +
      `🏥 Lesão: ${lesao || "Nenhuma lesão informada"}\n` +
      `🎯 Objetivo: ${objetivo || "Não informado"}\n\n` +
      `📸 Fotos: Anexadas no formulário (ver anexos)\n\n` +
      `Enviado através do formulário de anamnese.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = generateWhatsAppMessage();
    window.open(`https://wa.me/5561995909917?text=${whatsappMessage}`, '_blank');
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    console.log("Arquivo:", formData.foto);
    
    showToast("✅ Formulário enviado com sucesso! Entraremos em contato em breve.", "success");
    
    // Resetar formulário
    setTimeout(() => {
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        altura: "", 
        peso: "", 
        lesao: "", 
        objetivo: "",
        foto: null 
      });
      setFotoPreview(null);
    }, 300);
  };

  return (
    <div className="contact-page-wrapper" id="contact" data-animate="fade-right" data-delay="200">
      <div className="contact-container">
        <div className="contact-header">
          <p className="primary-subheading">Anamnese</p>
          <h1 className="primary-heading">Pronto para transformar seu físico?</h1>
          <p className="primary-text">
            Preencha o formulário de anamnese para uma avaliação completa e personalizada.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-content">
                <h3>Telefone</h3>
                <p>+55 (61) 9 9590-9917</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>contato@teamsaboia.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-content">
                <h3>Localização</h3>
                <p>Brasília, Brasil</p>
              </div>
            </div>

            <div className="whatsapp-direct">
              <button 
                className="whatsapp-button"
                onClick={handleWhatsAppClick}
              >
                <FiMessageSquare />
                Falar diretamente no WhatsApp
              </button>
              <p className="whatsapp-hint">
                Envie o formulário preenchido via WhatsApp
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="altura"
                  placeholder="Altura (ex: 1.75m)"
                  value={formData.altura}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="peso"
                  placeholder="Peso (ex: 70kg)"
                  value={formData.peso}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="lesao"
                placeholder="Lesões prévias ou atuais (se houver)"
                rows="2"
                value={formData.lesao}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <textarea
                name="objetivo"
                placeholder="Descreva seu objetivo principal com a consultoria"
                rows="3"
                value={formData.objetivo}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group upload-group">
              <label className="upload-label">
                <FiUpload className="upload-icon" />
                <span>Anexar fotos (opcional)</span>
                <input
                  type="file"
                  name="foto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </label>
              {fotoPreview && (
                <div className="foto-preview">
                  <img src={fotoPreview} alt="Preview" />
                  <button 
                    type="button" 
                    className="remove-foto"
                    onClick={() => {
                      setFormData({...formData, foto: null});
                      setFotoPreview(null);
                    }}
                  >
                    ×
                  </button>
                </div>
              )}
              <p className="upload-hint">Formato: JPG, PNG (máx. 5MB)</p>
            </div>

            <button type="submit" className="secondary-button">
              Enviar Formulário
            </button>
          </form>
        </div>
      </div>

      {toast.show && (
        <div className={`toast-notification ${toast.type}`}>
          <div className="toast-content">
            <FiCheckCircle className="toast-icon" />
            <span className="toast-message">{toast.message}</span>
            <button 
              className="toast-close"
              onClick={() => setToast({ show: false, message: "", type: "" })}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;