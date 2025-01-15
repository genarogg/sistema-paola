import React from 'react'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <div className="logo">
                Sistema de Bienes Nacionales
            </div>
        </header>
    );
}

export default Header;