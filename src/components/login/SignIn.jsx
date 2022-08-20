import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const SignIn = ({ SignInUpToggle }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

    }

    return (
        <StForm onSubmit={handleSubmit((onSubmit))}>
            <StInput
                placeholder='이메일'
                type="text"
                {...register("email",
                    {
                        required: true, pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    })}
            />
            {errors.email && errors.email.type === "required" && <p> 이메일을 입력해 주세요 </p>}
            {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
            <StInput
                placeholder='비밀번호'
                type="password"
                {...register("password",
                    { required: true, minLength: 8, maxLength: 20, pattern: /(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/ })}
            />
            {errors.password && errors.password.type === "required" && <p>비밀번호를 입력해 주세요.</p>}
            {errors.password && errors.password.type === "minLength" && <p>비밀번호가 너무 짧습니다.</p>}
            {errors.password && errors.password.type === "maxLength" && <p>비밀번호가 너무 길어요.</p>}
            {errors.password && errors.password.type === "pattern" && <p>영문, 숫자, 특수문자 혼합하여 8~20자리로 입력해주세요. </p>}
            <StButton>로그인</StButton>
            <StButton onClick={SignInUpToggle}>회원가입</StButton>
        </StForm>
    );
};

const StForm = styled.form`
    p {
        color: red;
        margin-bottom: 10px;
    }
`

const StInput = styled.input`
    display: block;
    width: 400px;
    height: 40px;
    box-sizing: border-box;
    background-color: #efefef;
    border: none;
    margin-bottom: 10px;
`

const StButton = styled.button`
    display: block;
    width: 400px;
    height: 40px;
    border: none;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
    margin-bottom: 10px;
    cursor: pointer;
`

export default SignIn;