import React from 'react'
import { BigIcon, IconDiv,Footer2, InpDiv, LittleIcon,
Page5,SignUp, TextDiv, Wrapper,Inp,Text1,Checked, Text2 ,InpIcon ,EmailIc, } from './style'
import Big from '../assets/dc2.png'
import Fac from '../assets/Facebook.png'
import Telegram from '../assets/tg.png'
import Instagram from '../assets/insta.png'
import Youtube from '../assets/youtube.png'
import { Checkbox } from '@mui/material'
 
const Footer = () => {

  function Open1() {
    window.location.href = 'https://www.facebook.com/'
  }
  function Open2() {
    window.location.href = 'https://www.telegram.com/'
  }
  function Open3() {
    window.location.href = 'https://www.instagram.com/'
  }
  function Open4() {
    window.location.href = 'https://www.youtube.com/'
  }

  return (
    <Wrapper>
      <Page5>
          <IconDiv>
            <BigIcon>
              <img src={Big} alt="" />
            </BigIcon>
            <LittleIcon>
              <img onClick={Open1} src={Fac} alt="" />
              <img onClick={Open2} src={Telegram} alt="" />
              <img onClick={Open3} src={Instagram} alt="" />
              <img onClick={Open4} src={Youtube} alt="" />
            </LittleIcon>
          </IconDiv>
          <TextDiv>
            <Text1>
              <h4>О нас</h4>
              <h4>Турниры</h4>
              <h4>Счёты</h4>
              <h4>Фото</h4>
            </Text1>
            <Text2>
              <h4>Dote2</h4>
              <h4>StarCraft2</h4>
              <h4>CS:GO</h4>
              <h4>League of Legends</h4>
              <h4>Fortnite</h4>
              <h4>Rainbow 6 Siega</h4>
              <h4>Pubg</h4>
            </Text2>
          </TextDiv>
          <InpDiv>
            <SignUp>
              <h4>Sign Up to our newsletter!</h4>
              <h5>Do you want to recieve the latest updates and special offers? Enter your email below to receive our weekly newsletter.</h5>
            </SignUp>
            <Inp>
              <input type="text" placeholder='Your email' />
              <InpIcon>
                <EmailIc/>
              </InpIcon>
            </Inp>
              <Checked>
                <input type="checkbox" name="" id="" />
                  <>I accepat newsletter terms</>
              </Checked>
          </InpDiv>
      </Page5>
          <Footer2>
            <h3>Copyright by Digital City 2022</h3>
          </Footer2>
    </Wrapper>
  )
}

export default Footer