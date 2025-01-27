import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./sass/style.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/views/home/Home';
import Dashboard from './components/views/dashboard/home/DashBoard';
import Bienes from './components/views/dashboard/bienes/Bienes';
import Departamentos from './components/views/dashboard/departamentos/Departamentos';
import AggDepartamento from './components/views/dashboard/departamentos/agg/Agg';
import { AuthProvider } from './components/redux/AuthContext';

import AggBienes from './components/views/dashboard/bienes/agg/Agg';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/bienes" element={<Bienes />} />
                    <Route path="/dashboard/bienes/agregar" element={<AggBienes />} />
                    <Route path="/dashboard/departamentos" element={<Departamentos />} />
                    <Route path="/dashboard/departamentos/agregar" element={<AggDepartamento />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

//@ts-ignore
ReactDOM.render(<App />, document.getElementById('app'));