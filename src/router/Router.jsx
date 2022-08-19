import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../components/pages/Main';
import Detail from '../components/pages/Detail';
import Create from '../components/pages/Create';
import NotFound from '../components/pages/NotFound'


const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/detail/:postId' element={<Detail/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;