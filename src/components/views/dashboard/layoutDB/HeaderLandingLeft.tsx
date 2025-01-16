import React, { useState } from "react";

import { FaEnvelopeOpenText, FaLightbulb } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { AiTwotoneAppstore } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdForward5 } from "react-icons/md";
import BtnLoki from "../../../btns/hamburguesa/btnLoki";
import { A } from "../../../nano";

import Nav from "./navs/Nav";

interface HeaderLandingLeftProps { }

// Definir los elementos del header
const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };
const menuItems = [
  { href: "/dasboard", label: "Inicio", icon: <TiHome /> },
  { href: "/dasboard/bienes", label: "bienes", icon: <AiTwotoneAppstore /> },
  { href: "/dasboard/departamentos", label: "departamentos", icon: <BsBuildings /> },
  { href: "/dasboard/estadisticas", label: "estadisticas", icon: <IoStatsChart /> },
  { href: "/dasboard/bitacora", label: "bitacora", icon: <MdForward5 /> },
  { href: "/dasboard/usuario", label: "usuario", icon: <FaUserAlt /> },
  { href: "/", label: "salir", icon: <IoMdExit /> },
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
