import React from 'react';
import Header from '../common/Header'
import Layout from '../common/Layout'
import Footer from '../common/Footer'
import MainLayout from '../main/MainLayout'

const Main = () => {
    return (
        <>
            <Header/>
            <Layout>
                <MainLayout/>
            </Layout>
            <Footer/>
        </>
    );
};

export default Main;