import React from 'react';
import Header from '../common/Header'
import Layout from '../common/Layout'
import Footer from '../common/Footer'
import DetailLayout from '../detail/DetailLayout'
import CommentLyaout from '../comment/CommentLyaout';

const Detail = () => {
    return (
       <> 
            <Header/>
            <Layout>
                <DetailLayout/>
                <CommentLyaout/>
            </Layout>
            <Footer/>
        </> 
    );
};

export default Detail;