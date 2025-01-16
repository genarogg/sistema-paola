import React, { useState } from "react";

import { FaEnvelopeOpenText, FaCommentDots, FaLightbulb } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

import BtnLoki from "../../../btns/hamburguesa/btnLoki";
import { A } from "../../../nano";

import Nav from "./navs/Nav";

interface HeaderLandingLeftProps { }

// Definir los elementos del header
const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };
const menuItems = [
  { href: "/", label: "Inicio", icon: <TiHome /> },
  { href: "#quienes-somos", label: "Quiénes Somos", icon: <FaCommentDots /> },
  { href: "#servicios", label: "Servicios", icon: <FaLightbulb /> },
  { href: "#proyectos", label: "Proyectos", icon: <GoFileDirectoryFill /> },
  { href: "#precios", label: "Precios", icon: <FaHandHoldingDollar /> },
  { href: "#contacto", label: "Contacto", icon: <FaEnvelopeOpenText /> },
];

const HeaderLandingLeft: React.FC<HeaderLandingLeftProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const Logo = () => {
    return (
      <div className="container-logo">
        <A href={home.href}>
          <strong><center>Sistema De <br />Bienes Nacionales</center></strong>
        </A>
      </div>
    );
  };

  return (
    <>
      <header className="header landing-left">
        <div className="desktop" id="desktopHeader">
          <Logo />
          <Nav menuItems={menuItems} />
          <BtnLoki
            className={"btn-desktop"}
            onClick={() => { setIsActive(!isActive) }}
          />
        </div>
        <Nav
          menuItems={menuItems}
          className="nav-xs"
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </header>
    </>
  );
};

export default HeaderLandingLeft;
