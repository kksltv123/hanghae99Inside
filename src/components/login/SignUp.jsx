import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form"
import axios from 'axios';
import { useState } from 'react';

const SignUp = ({SignInUpToggle}) => {
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    // 중복 검사
    const [check, setCheck] = useState({
        emailCheckState: false,
        nicknameCheckState: false,
    })

    const urlEmailCheck = process.env.REACT_APP_EMAILCHECK
    const urlNicknameCheck = process.env.REACT_APP_NICKNAMECHECK

    // 이메일 중복 체크
    const onEmailCheck = async() => {
        try {
            const email = watch("email")
            const postEmail = { email }
            const response = await axios.post(urlEmailCheck,postEmail);
            // 중복 x = false, 중복 o: true,
            console.log(response.data)
            if(response.data === false){
                let answer = window.confirm("사용할 수 있는 이메일입니다 사용하시겠습니까?");
                answer && setCheck({
                    ...check, emailCheckState: true
                });
            } else {
                alert("중복된 이메일 입니다.")
                setCheck({
                    ...check, emailCheckState:false
                });
            };
        } catch (error) {return;}
    }

    // 닉네임 중복 체크
    const onNicknameCheck = async() => {
        try {
            const nickname = watch("nickname")
            const postNickname = { nickname }
            const response = await axios.post(urlNicknameCheck,postNickname);
            console.log(response.data)
            // 중복 x = false, 중복 o: true,
            if(response.data === false){
                let answer = window.confirm("사용할 수 있는 닉네임입니다 사용하시겠습니까?");
                answer && setCheck({
                    ...check, nicknameCheckState:true
                })
            } else {
                alert("중복된 닉네임 입니다.")
                setCheck({
                    ...check, nicknameCheckState:false
                })
            }
        } catch(error) {return;}
    }

    // 회원가입 제출
    const onSubmit = async(data) => {
        if(check.emailCheckState === false || check.nicknameCheckState === false) {
            alert("이메일, 닉네임 중복체크를 해주세요")
            return
        }

        await axios.post('http://54.180.153.149/api/register', data)
        alert('회원가입 되셨습니다 축하합니다')
        SignInUpToggle();
    }

    const password = useRef();
    password.current = watch("password")

    return (
        <StForm onSubmit={handleSubmit((onSubmit))}>
            <StValidateBox>
                <StInput
                    placeholder='이메일'
                    type="text"
                    {...register("email", 
                        {required: true,  pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i})}
                />
                <StValidateButton type='button' onClick={onEmailCheck}>중복검사</StValidateButton>
            </StValidateBox>
            {errors.email && errors.email.type === "required" && <p> 이메일을 입력해 주세요. </p>}
            {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
            <StValidateBox>
                <StInput
                    placeholder='닉네임'
                    type="text"
                    {...register("nickname", {required: true, pattern:/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/})}
                />
                <StValidateButton type='button' onClick={onNicknameCheck}>중복검사</StValidateButton>
            </StValidateBox>
            {errors.nickname && errors.nickname.type === "required" && <p> 닉네임을 입력해 주세요. </p>}
            {errors.nickname && errors.nickname.type === "pattern" && <p>올바른 닉네임이 아닙니다.</p>}
            <h2>비밀번호</h2>
            <span>영어 대소문자, 특수문자(!@#$%^&*)를 이용한 비밀번호는 8자 이상 20자 이하로 입력해주세요.</span>
            <StInput
                placeholder='비밀번호'
                type= "password"
                {...register("password",
                    {required: true, minLength: 8, maxLength: 20, pattern:/(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/ })}
            />
            {errors.password && errors.password.type === "required" && <p>비밀번호를 입력해 주세요.</p>}
            {errors.password && errors.password.type === "minLength" && <p>비밀번호가 너무 짧습니다.</p>}
            {errors.password && errors.password.type === "maxLength" && <p>비밀번호가 너무 길어요.</p>}
            {errors.password && errors.password.type === "pattern" && <p>영문, 숫자, 특수문자 혼합하여 8~20자리로 입력해주세요. </p>}
            <StInput
                placeholder='비밀번호 확인'
                type="password"
                {...register("passwordConfirm",
                {required: true,
                validate: {
                    wrongPw:(value) => 
                        value === password.current || "비밀번호가 일치하지 않습니다."
                }
                })}
            />
            {errors.passwordConfirm && errors.passwordConfirm.type === "required" && <p> 비밀번호를 입력해 주세요. </p>}
            {errors.passwordConfirm && errors.passwordConfirm.type === "wrongPw" && <p> 비밀번호가 일치하지 않습니다. </p>}
            <StButton >회원가입</StButton>
            <StButton onClick = {SignInUpToggle} type='button'>취소</StButton>
        </StForm>
    );
};
const StForm = styled.form`
    p {
        color: red;
        padding: 10px 0px 20px 0px;
    }
    h2 {
        margin-bottom: 10px;
    }
    span {
        font-size: 14px;
        width: 400px;
        display: block;
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
const StValidateBox = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 350px
    }
`
const StValidateButton = styled.button`
    border: none;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
    width: 50px;
    font-size: 10px;
    height: 40px;
    padding: 0;
    margin-bottom: 10px;
    cursor: pointer;
`


export default SignUp;