import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://wa.me/997503665?text=Hola%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollador%20web"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribeme al WhatsApp"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/lilnait.dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Encuentrame en Instagram"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@lilnait.dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Encuentrame en Tiktok"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialMedia;
