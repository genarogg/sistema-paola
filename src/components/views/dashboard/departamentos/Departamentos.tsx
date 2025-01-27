'use client'
import React, { useState, useEffect } from 'react'

import Layout from '../layoutDB/layout'

import { URL_BACKEND } from '../../../../env'

import { AgLayout, AgSearchInput, AgTabletContainer } from '../../../tablet'

import { staticDataFake, configTablet } from "./configTablet"

import { A } from '../../../nano'

interface DemoProps {

}

const Demo: React.FC<DemoProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");

    const [data, setData] = useState<any[]>(staticDataFake);

    const Btns = () => {
        return (
            <>
                <A href="/dashboard/departamentos/agregar">
                    <button>agregar</button>
                </A>

            </>
        );
    };


    useEffect(() => {
        fetch(`${URL_BACKEND}/departamento/get`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <Layout>
            <AgLayout
                titulo="Bienes"
                btns={<Btns />}
                search={<AgSearchInput setQuickFilterText={setQuickFilterText} />}
            >
                <AgTabletContainer
                    columnDefs={configTablet}
                    rowData={data}
                    quickFilterText={quickFilterText}
                />
                <div className="container-footer">
                    <div className="container-bienes-totales">
                        <h3>Bienes Totales: totalCantidad</h3>
                    </div>
                   
                </div>
            </AgLayout>
        </Layout >
    );
}

export default Demo;