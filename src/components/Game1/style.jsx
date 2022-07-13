import styled from "styled-components";
import Game from '../assets/game.png'


export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    font-family: Russo One;
`
export const Page3 = styled.div`
    width: 100%;
    height:auto;
    background: url(${Game});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    button{
        color: white;
        border: 2px solid blueviolet;
    }
`
export const Text3 = styled.div`
    width: 70%;
    height: auto;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    p{
        font-size: 36px;
        margin: 60px;
        letter-spacing: 0.2rem;
        @media (max-width:378px){
        font-size:30px ;
        text-align: center;
    }
    @media (max-width:331px){
        font-size:25px ;
        text-align: center;
    }
    @media (max-width:731px){
        text-align: center;
    }
    }
    
`
export const Btn = styled.div`
    color: white;
    width: 50%;
    height: 200px;
    button{
        margin: 80px;
    }
`