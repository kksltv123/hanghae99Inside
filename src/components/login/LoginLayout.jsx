import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LoginLayout = () => {
    const [gotoSignUp, setGotoSignUp] = useState(false)
    const SignInUpToggle =() =>{
        setGotoSignUp(!gotoSignUp)
    }

    return (
        <>
        <StLoginForm>
            {gotoSignUp ? <SignUp SignInUpToggle={SignInUpToggle}/> : <SignIn SignInUpToggle={SignInUpToggle}/>}
        </StLoginForm>
    </>
    );
};

const StLoginForm = styled.div`
    width: 500px;
    border: 2px solid ${(props) => props.theme.colors.mainColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`

export default LoginLayout;