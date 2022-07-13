import styled from "styled-components";

import EmailIcon from '@mui/icons-material/Email';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    font-family: Montserrat;
    background-color: black;
`

export const Page5 = styled.div`
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
`

export const IconDiv = styled.div`
    /* border: 1px solid white; */
    width: 25%;
    height: 444px;
`
export const BigIcon = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LittleIcon = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 194px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    img{
        cursor: pointer;
    }
`
export const TextDiv = styled.div`
    /* border:1px solid wheat ; */
    width: 25%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

export const Text1 = styled.div`
    width: 40%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    line-height: 20px;
    @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: -90px;
        text-align: center;
    }
    h4{
        color: #fff;
        letter-spacing: 0.14rem;
        margin-top:40px;
        border: 1px solid white;
    @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 40px;
        text-align: center;
        border: none;
        width: 150%;
    }
    }
  
`
export const Text2 = styled.div`
    width: 60%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    h4{
        width: 100%;
        color: #fff;
        border: 1px solid white;
        letter-spacing: 0.14rem;
        text-align: left;
        margin-top: 40px;
        @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150%;
        flex-direction: column;
        margin-top: 40px;
        text-align: center;
        border:1px solid red;
    }
    }
    
    
`
export const InpDiv = styled.div`
    /* border: 1px solid yellow; */
    width: 50%;
    height: 444px;
    @media (max-width: 1040px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const Footer2 = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    h3{
        width: 400px;
        color:#9999 ;
        font-weight: 200;
        letter-spacing: 0.1rem;
    }
`
export const SignUp = styled.div`
    width: 80%;
    height: 150px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
    line-height: 20px;
    letter-spacing: 0.1rem;
    h4{
        color: white;
        /* border: 1px solid red; */
        line-height: 30px;
        font-weight: 800;
        border: 1px solid red;
        @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: 150%;
        margin-left:50px;
        text-align: center;
    }
    }
    h5{
        color: #a8a8a8;
        font-weight: 800;
        @media (max-width:1040px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: 150%;
        margin-left: 50px;
        text-align: center;
    }
    }
`
export const Inp = styled.div`
    width: 50%;
    height: 40px;
    margin-left: 30px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid white;
    transform: skew(-20deg);
    input{
        width:95%;
        height:100%;
        /* margin-left: 10px; */
        transform: skew(20deg);
        background: none;
        /* border: 1px solid white; */
        position: relative;
        border: none;
        outline: none;
        color: #fff;
    ::placeholder{
        margin-left: 10px;
    }
    &type{
        transform: skew(20deg);
    }
    }
    
`
export const InpIcon = styled.div`
    display: flex;
    height: 100%;
    width: 35px;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* margin-left: 550px; */
    /* Created with https://www.css-gradient.com */
    background: #EF9FC6;
    background: -webkit-linear-gradient(right, #e94674, #4129E8);
    background: -moz-linear-gradient(right, #e94674, #4129E8);
    background: linear-gradient(to left, #e94674, #4129E8);
`
export const EmailIc = styled(EmailIcon)`
    color: #ffffff;
    transform: skew(20deg);
`
export const Checked = styled.div`
    width: 80%;
    height: 50px;
    margin-left: 30px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1040px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input{
        margin-left: 10px;
        margin-right: 10px;
    }
`
