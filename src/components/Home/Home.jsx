
import { FirstPage,Icon1,Logo,Navbar,Register,Text1,Text2,Wrapper } from './style'
import Img from '../assets/dc.png'
import { Button } from '@mui/material'
import Bar from '../Bar/Bar'
import React, { useState,useEffect, } from 'react'
import axios from 'axios'
// const [scroll, setScroll] = useState(false)

//   const changeColor = ()=>{
//     if(window.scrollY >= 50){
//       setScroll(true)
//     }else{
//       setScroll(false)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll',changeColor, true)
//     return ()=>{
//       window.removeEventListener('scroll',changeColor)
//     }
//   }, [])

const Home = () => {

  //NAV scroll
  const [navSize, setnavSize] = useState('6rem');
  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () =>{
    window.scrollY > 10 ? setnavColor("#892be299") : setnavColor("transparent");
    window.scrollY >10 ? setnavSize("5rem") : setnavSize("5rem");
  };

  useEffect(() => {
   window.addEventListener("scroll", listenScrollEvent);
   return()=>{
    window.removeEventListener("scroll", listenScrollEvent);
   };
  }, []);

  const [info, setInfo] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const Scrolling = (val) => {
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
  }



  const [NavLogo1, setNavLogo] = useState([])

  const NavLogo = 'http://159.65.207.213/api/info'

  useEffect(()=>{
    axios.get(NavLogo)
    .then(res=>{
      setNavLogo(res.data)
    })
  },[])

  

  return (
    <Wrapper>
      <FirstPage>
        <Navbar style={{
          backgroundColor:navColor,
          height:navSize,
          transition:"all 1.5s"
        }} >
          <Logo>
            <img src={`http://159.65.207.213${NavLogo1.logo}`} alt="" />
          </Logo>
          <Register>
            <Text1>
              <button onClick={()=>Scrolling(1)}>О нас</button>
              <button onClick={()=>Scrolling(849)}>Турниры</button>
              <button onClick={()=>Scrolling(1900)}>Счёты</button>
              <button onClick={()=>Scrolling(3000)}>Фото</button>
            </Text1>
            <>
              <Button onClick={()=>Scrolling(3950)} >Регистрация</Button>
            </>
          </Register>
            <Icon1>
              <Bar/>
            </Icon1>
        </Navbar>
        <Text2>
          <h4>ДОБРО ПОЖАЛОВАТЬ В ИГРУ <br /> <span> DC CYBER </span>  В <br /> КИБЕРСПОРТИВНЫХ ИГРАХ</h4>
        </Text2>
      </FirstPage>
    </Wrapper>
  )
}

export default Home

// docs.google.com/document/s/1kY2oGtqfbTkzK8dgUnPBx45MxwO4IROcBROZT4trTjk/edit# 