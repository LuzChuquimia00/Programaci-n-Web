import React from 'react'

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:your-email@gmail.com">luzchuquimia1680@gmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Teléfono</h3>
          <p>
            <a href="tel:+123456789">+54 9 112366-5352</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Ubicación</h3>
          <p>
            CABA, Argentina
          </p>
        </div>
      </div>
    </section>
  );
};

