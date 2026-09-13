import React from 'react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <div className="floating_btn" aria-label="WhatsApp">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/5551999672121"
        title="Fale conosco no WhatsApp"
      >
        <div className="contact_icon">
          <i className="fa fa-whatsapp my-float" aria-hidden="true" />
        </div>
      </a>
    </div>
  );
};
