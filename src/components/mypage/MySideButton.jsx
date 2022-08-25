import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const MySideButton = ({buttonToggle, setbuttonToggle}) => {


    return (
        <StDiv>
            <StTap1 onClick={() => setbuttonToggle(1)} buttonToggle={buttonToggle}>홈</StTap1>
            {/* <StTap2 onClick={() => setbuttonToggle(2)} buttonToggle={buttonToggle}>게시글</StTap2>
            <StTap3 onClick={() => setbuttonToggle(3)} buttonToggle={buttonToggle}>댓글</StTap3> */}
        </StDiv>
    );
};

const StDiv = styled.div`
    width: 200px;
    height: 1000px;
    border-right: 1px solid #efefef;
`

const StTap1 = styled.div`
    width: 150px;
    height: 35px;
    background-color: ${props => (props.buttonToggle === 1? '#3b4890' : '#efefef')};
    color: ${props => (props.buttonToggle === 1? '#fff' : '#333')};
    line-height: 35px;
    padding: 5px 20px;
    margin-top: 10px;
    cursor: pointer;
`

const StTap2 = styled.div`
    width: 150px;
    height: 35px;
    background-color: ${props => (props.buttonToggle === 2? '#3b4890' : '#efefef')};
    color: ${props => (props.buttonToggle === 2? '#fff' : '#333')};
    line-height: 35px;
    padding: 5px 20px;
    margin-top: 10px;
    cursor: pointer;
`

const StTap3 = styled.div`
    width: 150px;
    height: 35px;
    background-color: ${props => (props.buttonToggle === 3? '#3b4890' : '#efefef')};
    color: ${props => (props.buttonToggle === 3? '#fff' : '#333')};
    line-height: 35px;
    padding: 5px 20px;
    margin-top: 10px;
    cursor: pointer;
`


export default MySideButton;