import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, ClassNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${ClassNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">©2022 Sergio</p>
            <p className="p-text">todos los derechos reservados</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
