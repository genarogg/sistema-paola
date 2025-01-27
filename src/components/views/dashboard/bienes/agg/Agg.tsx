'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Input, notify } from "../../../../nano";
import BtnSubmitBasic from '../../btnSubmitBasic';
import Layout from '../../layoutDB/layout';

import { URL_BACKEND } from '../../../../../env';

import { MdOutlineClass } from "react-icons/md";
import { SiOnlyoffice } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai"

import SelectInput from '../../../../nano/form/SelectInput';
import { useNavigate } from 'react-router-dom';

interface AggProps { }

const Agg: React.FC<AggProps> = () => {
    // const [data, setData] = useState<any[]>([]);
     const navigate = useNavigate();
    const [formattedData, setFormattedData] = useState<any[]>([
        { value: 1, label: "Departamento 1" },
        { value: 2, label: "Departamento 2" },
        { value: 3, label: "Departamento 3" },
    ]);
    const inputRef = useRef({
        grupo: "",
        subgrupo: "",
        seccion: "",
        concepto_movimiento: "",
        cantidad: "",
        numero_identificacion: "",
        nombre: "",
        marca: "",
        modelo: "",
        serial: "",
        incorporaciones: "",
        desincorporaciones: "",
        observaciones: "",
        departamento: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const handleSelectChange = (e: any) => {
        inputRef.current = { ...inputRef.current, departamento: e.value };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            grupo: inputRef.current.grupo,
            subgrupo: inputRef.current.subgrupo,
            seccion: inputRef.current.seccion,
            cantidad: inputRef.current.cantidad,
            numero_identificacion: inputRef.current.numero_identificacion,
            nombre: inputRef.current.nombre,
            marca: inputRef.current.marca,
            modelo: inputRef.current.modelo,
            serial: inputRef.current.serial,
            incorporaciones: inputRef.current.incorporaciones,
            observaciones: inputRef.current.observaciones,
            departamento: inputRef.current.departamento,
        }
        // Lógica para enviar los datos a un endpoint o procesarlos

        const token = localStorage.getItem('token');

        const response = await fetch(URL_BACKEND + '/bienes/create', {
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
            navigate('/dashboard/bienes');
        } else {
            notify({ message: result.message, type: result.type });
        }
    };

    useEffect(() => {
        fetch(`${URL_BACKEND}/departamento/get`)
            .then((res) => res.json())
            .then((res) => {
                const formatted = res.data.map((item: any) => ({
                    value: item.id,
                    label: `${item.departamento}, ${item.dependencia}, ${item.clasificacion}`
                }));
                if (formatted.length > 0) {
                    setFormattedData(formatted);
                }
            });
    }, []);

    return (
        <Layout>
            <div className="container-form">
                <h2>Agregar Bien</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        icon={<MdOutlineClass />}
                        type="text"
                        name="grupo"
                        id="grupo"
                        placeholder="Ingrese el grupo"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<SiOnlyoffice />}
                        type="text"
                        name="subgrupo"
                        id="subgrupo"
                        placeholder="Ingrese el subgrupo"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<AiOutlineDeploymentUnit />}
                        type="text"
                        name="seccion"
                        id="seccion"
                        placeholder="Ingrese la sección"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<MdOutlineClass />}
                        type="text"
                        name="concepto_movimiento"
                        id="concepto_movimiento"
                        placeholder="Ingrese el concepto de movimiento"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<SiOnlyoffice />}
                        type="number"
                        name="cantidad"
                        id="cantidad"
                        placeholder="Ingrese la cantidad"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<AiOutlineDeploymentUnit />}
                        type="text"
                        name="numero_identificacion"
                        id="numero_identificacion"
                        placeholder="Ingrese el número de identificación"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<MdOutlineClass />}
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Ingrese el nombre"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<SiOnlyoffice />}
                        type="text"
                        name="marca"
                        id="marca"
                        placeholder="Ingrese la marca"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<AiOutlineDeploymentUnit />}
                        type="text"
                        name="modelo"
                        id="modelo"
                        placeholder="Ingrese el modelo"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<MdOutlineClass />}
                        type="text"
                        name="serial"
                        id="serial"
                        placeholder="Ingrese el serial"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<SiOnlyoffice />}
                        type="number"
                        name="incorporaciones"
                        id="incorporaciones"
                        placeholder="Ingrese las incorporaciones"
                        onChange={handleChange}
                    />

                    <Input
                        icon={<MdOutlineClass />}
                        type="text"
                        name="observaciones"
                        id="observaciones"
                        placeholder="Ingrese las observaciones"
                        onChange={handleChange}
                    />
                    <SelectInput
                        icon={<SiOnlyoffice />}
                        placeholder="Seleccione el departamento"
                        content={true}
                        name="departamento"
                        value={inputRef.current.departamento}
                        valueChange={handleSelectChange}
                        options={formattedData}
                    />

                    <BtnSubmitBasic
                        push="dashboard/bienes"
                        endpoint="bienes/agg"
                        formData={inputRef}>
                        Guardar
                    </BtnSubmitBasic>
                </form>
            </div>
        </Layout>
    );
};

export default Agg;