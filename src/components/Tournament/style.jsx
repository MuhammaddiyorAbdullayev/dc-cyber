import styled from 'styled-components'

import Background from '../assets/Backimg4.png'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${Background});
    /* background-repeat: no-repeat; */
    background-position: center;
    background-size: cover; 
`

// export const Loader = styled.div`
//     width: 100%;
//     height: 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
`

// Navigation bar

export const Navbar = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:768px) {
        flex-direction: column;
        height: auto;
    }
`

export const NavTitle = styled.h1`
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    margin-left: 40px;
    @media (max-width:768px) {
       display: none;
    }
`


export const FuncButton = styled.button`
    /*
    border: 2px solid #b918b9;
    */
    font-family: 'Russo one',sans-serif;
    font-weight: 400;
    font-size: 23px;
    margin: 20px 0;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    display: none;
    background-color: #b918b990;
    width: 80%;
    height: 40px;
    border: none; 
    background: linear-gradient(10deg, #00e0ff, #db00ff, #00e0ff, #db00ff);
    background-size: 500%;
    animation: animate 8s linear infinite;
    :active{
        background-color: rgb(0,0,0,0);
    }
    @keyframes animate {
        0% {
        background-position: 0%;
        }
        100% {
        background-position: 400%;
        }
    }   
    @media (max-width:768px) {
        display: block;
    }
`

export const LinkWr = styled.div`
    width: 670px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    transition: all ease 1s;
    @media (max-width:768px) {
        max-height: 300px;
        overflow-y: scroll;
        width: 80%;
        flex-direction: column;
        align-items: center;
        margin-right: 0;
        display: ${p=>p.bolen ? 'none' : 'flex'};
    }
`

export const Link = styled.h2`
    font-weight: 200;
    font-family: 'Montserrat',sans-serif;
    font-size: 22px;
    cursor: pointer;
    color: #FFFFFF;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    
    @media (hover: hover) and (pointer: fine) {
    &:hover::before{
      left: 0;
      right: auto;
      width: 100%;
    }
  }
  @media (max-width:768px) {
    width: 96%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background-color: #5461d49e;
    border: 2px solid #5461d4;
    border-radius: 5px;
    &:active{
        opacity: 0.6;
    }
  }
`

// Teams wrapper

export const Teams = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width:870px) {
        align-items: center;
    }
`

export const TeamCard = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width:870px) {
        width: 500px;
        flex-direction: column;
        justify-content: space-around;
        height: 400px;
    }
    @media (max-width:580px) {
        width: 90%;
    }
    @media (max-width:440px) {
        height: 250px;
    }
`

export const AvaCard = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
    h1{
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        letter-spacing: 0.2em;
        color: #FFFFFF;
    }
    @media (max-width:870px) {
        width: 100%;
        margin-left: 0;
    }
`

export const Avatar = styled.img`
    width: 216px;
    height: 214px;
    border-radius: 10px;
    object-fit: contain;
    @media (max-width:1050px) {
        width: 186px;
        height: 184px;
    }
    @media (max-width:508px) {
        width: 55%;
        height: 55%;
        object-fit: contain;
    }
    @media (max-width:440px) {
        width: 50%;
        height: 50%;
        object-fit: contain;
    }
`

export const CardTexts = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 40px;
    h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        color: #FFFFFF;
        margin-bottom: 20px;
    }
    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }
    @media (max-width:1050px) {
        h2{
            font-size: 23px;
        }
        p{
            font-size: 12px;
        }
    }
    @media (max-width:870px) {
        width: 100%;
        margin-left: 0;
        align-items: center;
        h2{
            text-align: center;
        }
    }
    @media (max-width:440px) {
        h2{
            font-size: 18px;
        }
        p{
            font-size: 9px;
        }
    }
`

// Button div

export const BtnDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width:768px) {
        justify-content: center;
        button{
            margin: 0;
        }
    }
`

export const Button = styled.button`
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    color: #fff;
    width: 211px;
    height: 56px;
    font-size: 22px;
    line-height: 42px;
    padding: 0;
    border: none;
    background: #8F00FF;
    margin-right: 40px;

    &:hover{
        background: transparent;
        box-shadow:none;
    }

    &::before,::after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition:400ms ease all;
    }

    &::after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }

    &:hover::before,:hover::after{
        width:100%;
        transition:800ms ease all;
    }

    @media (max-width:430px) {
        transform: scale(0.8);
        margin-right: 0;
    }

`

// Div for title 

export const BgTitleWr = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
    h1{
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        color: #FFFFFF;
        margin-left: 40px;
    }
    @media (max-width:768px) {
        justify-content: center;
        h1{
            margin-left: 0px;
        }
    }
`

// Div for images

export const ImagesWr = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1110px) {
        height: 800px;
    }
    @media screen and (max-width: 1010px) {
        height: 700px;
    }
    @media screen and (max-width: 900px) {
        height: 600px;
    }
    @media screen and (max-width: 800px) {
        height: 400px;
    }
    @media (max-width:768px) {
        display: none;
    }

`

export const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -150px;
    @media screen and (max-width: 1110px) {
        transform: scale(0.9);
        margin-left: -130px;
    }
    @media screen and (max-width: 1010px) {
        transform: scale(0.8);
        margin-left: -115px;
        margin-top: -50px;
    }
    @media screen and (max-width: 900px) {
        transform: scale(0.7);
        margin-left: -100px;
    }
    @media screen and (max-width: 800px) {
        transform: scale(0.6);
        margin-left: -90px;
        margin-top: -50px;
    }
    @media screen and (max-width: 700px) {
        transform: scale(0.5);
        margin-left: -75px;
        margin-top: -100px;
    }
    @media screen and (max-width: 580px) {
        transform: scale(0.4);
        margin-left: -60px;
        margin-top: -150px;
    }
    @media screen and (max-width: 480px) {
        transform: scale(0.3);
        margin-left: -43px;
        margin-top: -200px;
    }
    @media screen and (max-width: 355px) {
        transform: scale(0.2);
        margin-left: -33px;
        margin-top: -200px;
    }
`

export const Items = styled.div`
    position: relative;
    /* top: 30px; */
`
export const ImagesBorder = styled.div`
    margin-left: 145px;
    left: 100px;
    width: 1067px;
    height: 577px;
    box-shadow: 0px 0px 20px rgb(103, 103, 255);
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
`

export const Item1 = styled.img`
    width: 300px;
    position: absolute;
    left: 150px;

`
export const Item2 = styled.img`
    width: 300px ;
    position: absolute;
    left: 450px;
`
export const Item3 = styled.img`
    width: 300px ;
    position: absolute;
    left: 450px;
    top: 142px;
    
`
export const Item4 = styled.img`
    width: 208px ;
    position: absolute;
    left: 750px;
`
export const Item5 = styled.img`
    width: 250px ;
    position: absolute;
    left: 958px;
`
export const Item6 = styled.img`
    width: 250px ;
    position: absolute;
    left: 958px;
    top: 140px;
`
export const Item7 = styled.img`
    width: 348px ;
    position: absolute;
    top: 285px;
    left: 102px;
`
export const Item8 = styled.img`
    width: 300px ;
    position: absolute;
    top: 430px;
    left: 150px;
`
export const Item9 = styled.img`
    width: 508px ;
    position: absolute;
    top: 285px;
    left: 450px;
`
export const Item10 = styled.img`
    width: 249px ;
    position: absolute;
    top: 275px;
    left: 958px;
`

// Responsive images wrapper

export const ResWrapper = styled.div`
    width: 100%;
    height: auto;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img{
        width: 80%;
        height: auto;
        object-fit: contain;
        box-shadow: 0px 0px 20px rgb(103, 103, 255);
        border: double 0.3em transparent;
        border-radius: 8px;
        background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
        linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
        background-origin: border-box;
        background-clip: content-box, border-box;
        margin: 20px 0;
    }
    @media (max-width:768px) {
        display: flex;
    }
`

// Rgb cards wrapper

export const BgCardWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BgCardWr = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    display: flex; 
    margin-bottom: 200px;
`

export const BgCard = styled.div`
    width: 305px;
    height: 305px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 10px;
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;

    h1{
        font-weight: 400;
        font-size: 55.9524px;
        line-height: 168%;
        letter-spacing: 0.14em;
        color: #FFFFFF;
    }
    P{
        font-weight: 400;
        font-size: 26.1905px;
        line-height: 168%;
        letter-spacing: 0.14em;
        color: #FFFFFF;
    }

    @media (max-width:425px) {
        transform: scale(0.7);
        margin: 0px;
    }
`

// Inputs wrapper

export const InpWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    height: auto;
    display: flex;
    backdrop-filter: blur(20px);
    background: #ffffff94;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 200px;
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
    h1{
        font-weight: 400;
        font-size: 36px;
        line-height: 100%;
        letter-spacing: 0.14em;
        padding: 40px 0;
        color: #FFFFFF;
    }
    @media (max-width:660px) {
        width: 100%;
        backdrop-filter: blur(20px);
        background: #81818129;
        background-image: none;
        border: none;
        border-radius: 0px;
        background-image: none;
        background-origin: border-box;
        background-clip: content-box, border-box;
        margin-bottom: 0px;
    }
    @media (max-width:420px) {
        h1{
            font-size: 23px;
        }
    }
`

export const InpButtons = styled.div`
    width: 80%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        padding: 10px 30px;
        border: none;
        background-color: rgb(0,0,0,0);
        cursor: pointer;
        font-family: 'Russo one',sans-serif;
        font-weight: 400;
        border-radius: 5px;
        font-size: 26px;
        letter-spacing: 0.14em;
        color: #FFFFFF;
        transition: all ease 0.3s;
        border: 2px solid rgb(0,0,0,0);

        &:hover{
            background-color: #ffffff30;
        }
        &:active{
            opacity: 0.6;
        }
    }
    @media (max-width:1110px) {
        width: 90%;
    }
    @media (max-width:600px) {
        button{
            padding: 5px 15px;
            font-size: 20px;
        }
    }
    @media (max-width:400px) {
        button{
            font-size: 16px;
        }
    }
`

    // files wrapper

    export const InpFiles = styled.div`
        width: 80%;
        height: 137px;
        display: flex;
        margin: 40px 0;
        align-items: center;
        justify-content: space-between;
        @media (max-width:1110px) {
            width: 90%;
        }
        @media (max-width:768px) {
            height: 90px;
        }
        @media (max-width:580px) {
            flex-direction: column;
            height: 420px;
            justify-content: space-around;
        }
    `

    export const FilesAvatarDiv = styled.div`
        width: 137;
        height: 137px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width:768px) {
            width: 90px;
            height: 90px;
        }
        @media (max-width:580px) {
            width: 100%;
            height: 207px;
            background-color: #d8d8d853;
            border-radius: 10px;
        }
    `

    export const FilesAvatar = styled.img`
        width: 137px;
        height: 137px;
        /* border-radius: 10px; */
        border-radius: 50%;
        @media (max-width:768px) {
            width: 100%;
            height: 90px;
        }
        @media (max-width:580px) {
            width: 170px;
            height: 170px;
        }
    `

    export const FilesWrapper = styled.div`
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* box-shadow: 0px 0px 20px rgb(103, 103, 255); */
        border: double 0.1em transparent;
        border-radius: 8px;
        background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
        linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
        background-origin: border-box;
        background-clip: content-box, border-box;
        
        h1{
            font-family: 'Lexend';
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 30px;
            color: #808191;
            margin-left: 40px;
        }
        input{
            display: none;
        }
        label{
            font-family: 'Lexend';
            font-style: normal;
            display: flex;
            justify-content: center;
            align-items: center;
            /* color: white;
            font-weight: 400;
            border: 2px solid #8F00FF;
            font-size: 16.8578px;
            cursor: pointer;
            line-height: 21px; */
            width: 192.94px;
            height: 42px;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            border: none;
            margin-right: 40px;
            background: #8F00FF;
            cursor: pointer;
            border-radius: 5.8px;
            transition: all ease 0.3s;
            &:hover{
                opacity: 0.6;
            }
            &:active{
                transform: scale(0.9);
            }
        }
        @media (max-width:980px) {
            width: 70%;
            h1{
                font-size: 18px;
            }
            label{
                font-size: 14px;
                width: 160px;
                height: 40px;
            }
        }
        @media (max-width:768px) {
            width: 80%;
            h1{
                margin-left: 10px;
            }
            label{
                margin-right: 10px;
            }
        }
        @media (max-width:660px) {
            border: double 0.1em transparent;
            border-radius: 8px;
            background-image: none; 
            background-color: #d8d8d853;
            h1{
                color: #bdbec2;
            }
        }
        @media (max-width:670px) {
            width: 76%;
        }
        @media (max-width:580px) {
            width: 100%;
            height: 35%;
        }
        @media (max-width:390px) {
            height: 40%;
            flex-direction: column;
            justify-content: space-around;
            h1{
                margin: 0px;
                line-height: 0px;
            }
            label{
                margin: 0px;
                line-height: 0px;
                transition: all ease 0.4s;
                &:hover{
                    background-color: #9000ff5e;
                }
            }
        }
`

export const InpInputs = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1110px) {
        width: 90%;
    }
    @media (max-width:860px) {
        flex-direction: column;
    }
`

export const InputsWrapper = styled.div`
    width: 48%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    label{
        font-family: 'Montserrat',sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 100%;
        color: #FFFFFF;
        opacity: 0.5;
    }
    @media (max-width:860px) {
        width: 100%;
    }
    @media (max-width:500px) {
        label{
            font-size: 15px;
            line-height: 0px;
        }
    }
`

export const InpInput = styled.input`
    width: 100%;
    height: 60px;
    font-size: 18px;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(0,0,0,0);
    border-bottom: 1px solid #FFFFFF;
    transition: all ease 0.5s;
    padding: 10px;
    border-radius: 10px 10px 0 0 ;
    &:focus{
        /* border-bottom: 1px solid rgba(0, 224, 255, 1); */
        background-color: #63636328;
    }
`

export const Select = styled.select`
    width: 100%;
    height: 60px;
    font-size: 18px;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(0,0,0,0);
    border-bottom: 1px solid #FFFFFF;
    transition: all ease 0.5s;
    padding: 10px;
    border-radius: 10px 10px 0 0 ;
    &:focus{
        /* border-bottom: 1px solid rgba(0, 224, 255, 1); */
        background-color: #63636328;
    }
    cursor: pointer;
    option{
        color: black;
        background-color: #63636328;
        height: 60px;
    }
`

export const InputMiniWr = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InputMini = styled.input`
    width: 45%;
    height: 60px;
    font-size: 18px;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(0,0,0,0);
    border-bottom: 1px solid #FFFFFF;
    transition: all ease 0.5s;
    padding: 10px;
    border-radius: 10px 10px 0 0 ;
    &:focus{
        /* border-bottom: 1px solid rgba(0, 224, 255, 1); */
        background-color: #63636328;
    }
`

export const InpButtonWr = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InpButton = styled.button`
    width: 304px;
    height: 52px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    background: #8F00FF;
    cursor: pointer;
    border-radius: 5.8px;
    transition: all ease 0.3s;
    &:hover{
        opacity: 0.6;
    }
    &:active{
        transform: scale(0.9);
    }
    @media (max-width:470px) {
        width: 70%;
        height: 45px;
    }
    
`






