'use client';
import React, { useRef } from 'react';
import { Input, notify } from "../../../../nano";
import BtnSubmitBasic from '../../btnSubmitBasic';
import Layout from '../../layoutDB/layout';

import { URL_BACKEND } from '../../../../../env';

import { MdOutlineClass } from "react-icons/md";
import { SiOnlyoffice } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai"

import { useNavigate } from 'react-router-dom';

interface AggProps { }

const Agg: React.FC<AggProps> = () => {
        const navigate = useNavigate();
    const inputRef = useRef({
        clasificacion: "",
        departamento: "",
        dependencia: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            clasificacion: inputRef.current.clasificacion,
            departamento: inputRef.current.departamento,
            dependencia: inputRef.current.dependencia,
        }
        console.log("Datos enviados:", inputRef.current);
        // Lógica para enviar los datos a un endpoint o procesarlos

        const token = localStorage.getItem('token');

        const response = await fetch(URL_BACKEND + '/departamento/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            notify({ message: result.message, type: result.type });
            navigate('/dashboard/departamentos');

        } else {
            notify({ message: result.message, type: result.type });
        }
    };
    return (
        <Layout>
            <div className="container-form">
                <h2>Agregar Departamento</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        icon={<MdOutlineClass />}
                        type="text"
                        name="clasificacion"
                        id="clasificacion"
                        placeholder="Ingrese la clasificación"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<SiOnlyoffice />}
                        type="text"
                        name="departamento"
                        id="departamento"
                        placeholder="Ingrese el departamento"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<AiOutlineDeploymentUnit />}
                        type="text"
                        name="dependencia"
                        id="dependencia"
                        placeholder="Ingrese la dependencia"
                        onChange={handleChange}
                    />

                    <BtnSubmitBasic
                        push="dashboard/departamentos" endpoint="departamento/agg"
                        formData={inputRef}>Guardar</BtnSubmitBasic>
                </form>
            </div>
        </Layout>
    );
};

export default Agg;
