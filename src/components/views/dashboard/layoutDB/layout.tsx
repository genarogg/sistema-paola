'use client'


import React from 'react'
import HeaderLandingLeft from "./HeaderLandingLeft";
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className={`containerAll`}>
                <HeaderLandingLeft />
                <main>
                    {children}
                </main>
              {/* <footer>hola mundo</footer> */}
            </div>
            <ToastContainer />
        </>
    );
}

export default Layout;