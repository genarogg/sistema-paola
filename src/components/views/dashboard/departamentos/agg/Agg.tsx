'use client';
import React, { useRef } from 'react';
import { Input, } from "../../../../nano";
import BtnSubmitBasic from '../../btnSubmitBasic';
import Layout from '../../layoutDB/layout';


interface AggProps { }

const Agg: React.FC<AggProps> = () => {
    const inputRef = useRef({
        clasificacion: "",
        departamento: "",
        dependencia: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos enviados:", inputRef.current);
        // Lógica para enviar los datos a un endpoint o procesarlos
    };
    return (
        <Layout>
            <div className="container-form">
                <h2>Agregar Departamento</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="clasificacion"
                        id="clasificacion"
                        placeholder="Ingrese la clasificación"
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="departamento"
                        id="departamento"
                        placeholder="Ingrese el departamento"
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="dependencia"
                        id="dependencia"
                        placeholder="Ingrese la dependencia"
                        onChange={handleChange}
                    />

                    <BtnSubmitBasic push="dashboard/departamentos" endpoint="departamento/agg" formData={inputRef}>Guardar</BtnSubmitBasic>
                </form>
            </div>
        </Layout>
    );
};

export default Agg;
