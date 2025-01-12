import React from "react";

function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <footer className="footer text-center">
      <p>
        ¿Querés saber más? Envíanos un mail a{" "}
        <a href="mailto:info@leasingargentina.ar">info@leasingargentina.ar</a> o
        usa whatsapp {" "}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-success fw-bold"
        >
          <i className="bi bi-whatsapp fs-3 whatsapp-icon"></i>
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
