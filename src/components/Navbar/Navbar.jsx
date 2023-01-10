import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {

  const navigation = ["Inicio", "Sobre mi", "Trabajo", "Habilidades", "Contacto"]

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoLilnait} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navigation.map((item) => (
          <li className="app__flex p-text-nav" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <BiMenuAltRight onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navigation.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
