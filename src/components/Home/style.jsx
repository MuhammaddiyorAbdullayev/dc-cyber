import styled from "styled-components";
import Image from '../assets/back1.png'
import { Toc } from '@mui/icons-material'

// FirstPage

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    font-family: Russo One;
    
`

export const FirstPage = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center ;
     background-attachment: fixed ;
    
`
export const Navbar = styled.div`
    width: 100%;
    z-index: 1;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    position: fixed;
    -webkit-backdrop-filter: blur(200px);
    backdrop-filter: blur(10px);
    -webkit-box-shadow: 0px 38px 53px -14px rgba(20, 28, 34, 0.78);
    -moz-box-shadow: 0px 38px 53px -14px rgba(20, 28, 34, 0.78);
    box-shadow: 0px 38px 53px -14px rgba(20, 28, 34, 0.78);
   
`
export const Logo = styled.div`
`
export const Register = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    align-items: center;
    button{
        color: white;
        background-color: blueviolet;
        width: 171px;
        height: 40px;
    }
    button{
        color: white;
        background-color: blueviolet;
        width: 171px;
        height: 40px;
    }
    @media (max-width:770px){
        display: none;
    }
`
export const TocIcon = styled(Toc)`
    color: white !important;
    width: 40px !important;
    height: 40px !important;
`
export const Icon1 = styled.div`
    width: 10%;
    color: white;
    font-size: 30px;    
    text-align: center;
    @media (min-width: 770px){
        display: none;
    }
    @media (max-width:770px){
        display: block;
    }
`
export const Text1 = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    font-weight: 400;
    color: white;
    letter-spacing: 0.3rem;
    button{
        cursor: pointer;
        border: 2px solid white;
        font-size:16px;
        border-radius: 5px;
    }
`
export const Text2 = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-weight:200;
    font-size: 40px;
    line-height:100px;
    span{
        color:blueviolet ;
    }
    h4{
        width: 100%;
        height: auto;
        text-align: center;
        letter-spacing: 0.5rem;
        @media (max-width:677px){
        text-align: center;
        flex-direction: column;
        font-size: 30px;
    }
    @media (max-width:441px) {
        font-size: 25px;
        text-align: center;
        flex-direction: column;
    }
    @media (max-width:390px) {
        font-size: 20px;
        text-align: center;
        flex-direction: column;
    }
    @media (max-width:335px) {
        font-size: 15px;
        text-align: center;
        flex-direction: column;
    }
    @media (max-width:637px) {
        line-height: 50px;
        text-align: center;
        flex-direction: column;
    }
    @media (max-width:667px) {
        height:300px ;
        text-align: center;
        flex-direction: column;
    }
    }
    
    
`

// SecondPage

export const SecondPage = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center ;
`
