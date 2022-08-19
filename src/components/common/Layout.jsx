import React from 'react';
import styled from "styled-components";

const Layout = (props) => {
    return (
        <StLayout>{props.children}</StLayout>
    );
};

const StLayout = styled.div`
    width: 1200px;
    margin: 0 auto;
`

export default Layout;