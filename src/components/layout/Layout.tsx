import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import { ToastContainer } from "react-toastify";

interface LayoutProps {
    children: React.ReactNode;
    where?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    where="",
    header,
    footer
}) => {
    return (
        <div className={`${where} containerAll`}>
            {header ? header : <Header />}
            <main>
                {children}
            </main>
            {footer ? footer : <Footer />}
            <ToastContainer />
        </div>
    );
}

export default Layout;