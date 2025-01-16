import React from 'react'

import { A, Icon } from "../../../../nano";

interface NavProps {
  className?: string;
  isActive?: boolean;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  }[];
}

const Nav: React.FC<NavProps> = ({
  menuItems,
  className = "",
  isActive,
  setIsActive,
}) => {
  return (
    <div
      className={`container-nav ${className}   ${isActive ? "active" : ""} ${
        menuItems[0].icon ? "" : "sin-iconos"
      }`}
    >
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setIsActive && setIsActive(!isActive);
              }}
            >
              {item.icon && (
                <div className="container-icono">
                  <Icon icon={item.icon} />
                </div>
              )}
              <A href={item.href}>{item.label}</A>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
