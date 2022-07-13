import styled from "styled-components";
import Img2 from '../assets/back2.png'
export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    font-family: Russo One;
`
export const Page2 = styled.div`
    width: 100%;
    height: auto;
    background: url(${Img2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
`
export const Text2 = styled.div`
    color: white;
    height: 300px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    letter-spacing: 0.14em;
    @media (max-width:766px){
        font-size: 30px;
    }
    @media (max-width:630px){
        font-size: 25px;
    }
    @media (max-width:525px){
        font-size: 20px;
    }
    @media (max-width:423px){
        font-size: 15px;
    }
`
export const Img = styled.div`
    width: 100%;
    height: auto;
    color: white;
    padding:15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top:50px;
    @media (max-width:1250px) {
        font-size:15px;
        flex-wrap: wrap;
    }
    @media (max-width:415px) {
        font-size:15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

export const Img1 = styled.div`
    width: 400px;
    height: 350px;
    display: flex;
    background-color: #99999939;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius:20px;
    flex-direction: column;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter:blur(5px) ;
    @media (max-width:1534px) {
        font-size:15px;
    }
    @media (max-width:1250px) {
        font-size:15px;
        margin: 50px;
    }
    @media (max-width:415px) {
        font-size:15px;
        width:100%;
    }
    img{
        margin-top:-180px ;
        @media (max-width: 469px){
        width: 120px;
        height: 120px;
    }
    @media (max-width: 423px){
        width: 100px;
        height: 100px;
    }
    }
    h2{
        margin-top: 50px;
        color: yellow;
    }
    p{
        margin-top:30px;
        color: yellow;
    }
`