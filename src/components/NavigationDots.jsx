import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Inicio", "Sobre mi", "Trabajo", "Habilidades", "Contacto"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#9D5AFF" } : {}}
          >
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
