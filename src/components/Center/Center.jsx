import React from 'react'
import { Img, Img1, Page2, Text2, Wrapper } from './style'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Center = () => {

  const BlogApi = 'http://159.65.207.213/api/blog/'
  const [blogDatas, setBlogDatas] = useState([])

  useEffect(() => {
      axios.get(BlogApi)
      .then(res => {
        setBlogDatas(res.data)
      })
  }, [])
  
  
  return (
    <Wrapper>
        <Page2>
            <Text2>
                <p>
                Digital City — профессиональная игровая 
                <br /> организация, созданная в 2019 году. Наша цель — 
                <br /> объединить самых талантливых 
                <br /> киберспортсменов со всего мира.
                </p>
            </Text2>
            <Img>
              {
                blogDatas?.map((item,index)=>{
                  return(
                    <Img1 key={index}>
                      <img src={`http://159.65.207.213${item.image}`} alt="" />
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </Img1>
                  )
                })
              }
            </Img>
        </Page2>
     
    </Wrapper>
  )
}

export default Center
