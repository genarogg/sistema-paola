'use client'
import React from 'react'
import Layout from '../../layout/Layout'
    
interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( 
    <Layout>
        <div>
            <h1>Hola mundo</h1>
        </div>
    </Layout>
     );
}
 
export default Home;