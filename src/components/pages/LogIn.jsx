import React from 'react';
import Layout from '../common/Layout';
import LoginHeader from '../login/LoginHeader';
import LoginLayout from '../login/LoginLayout';

const LogIn = () => {
    return (
        <>
            <LoginHeader/>
            <Layout>
                <LoginLayout/>
            </Layout>
        </>
    );
};


export default LogIn;