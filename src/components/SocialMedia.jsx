import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
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
        href="https://github.com/LilNait-S"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Encuentrame en github"
      >
        <BsGithub />
      </a>
      <a
        href="www.linkedin.com/in/sergio-delgado-arenas"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Encuentrame en linkedin"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
