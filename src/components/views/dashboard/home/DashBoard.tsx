'use client'
import React from 'react'
import Layout from '../layoutDB/layout'
import { A } from "../../../nano"
import BtnNormalBasic from '../../../btns/basic/btnNormalBasic'


interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {

    const Element = ({ titulo }: any) => {
        return (
            <BtnNormalBasic className={`elemento ${titulo}`}>
                <A href={`dashboard/${titulo}`}  >
                    <div className="container-img">
                        <img src={`/undraw/${titulo}.svg`} alt={titulo} />
                    </div>
                    <label htmlFor="">{titulo}</label>
                </A>
            </BtnNormalBasic>
        )
    }

    return (

        <Layout>
            <div className="secciones">
                <Element titulo="bienes" />
                <Element titulo="departamentos" />
                <Element titulo="estadisticas" />
                <Element titulo="bitacora" />
                <Element titulo="usuario" />
                <Element titulo="salir" />
            </div>
        </Layout>
    );
}

export default Dashboard;