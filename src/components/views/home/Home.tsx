'use client'
import React from 'react'
import Layout from '../../layout/Layout'
import LokiLogin from '../../form/formLoki/LokiLogin'

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            <LokiLogin />
        </Layout>
    );
}

export default Home;