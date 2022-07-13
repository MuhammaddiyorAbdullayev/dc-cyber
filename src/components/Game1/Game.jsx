
import { Button } from '@mui/material'
import React from 'react'
import { Page3, Text3, Wrapper,Btn } from './style'

const Game = () => {
  return (
    <Wrapper>
        <Page3>
            <Text3>
                <p>
                    ПРИШЛО ВРЕМЯ ПОГРУЖАТЬСЯ В
                    МИР КИБЕРСПОРТА С DIGITAL CITY-SPORT! СТАНЬТЕ ЧАСТЬЮ НАШЕЙ
                    КОМАНДЫ СЕГОДНЯ
                </p>
            </Text3> 
            <Btn>
              <Button>Записаться</Button>
            </Btn>
        </Page3>
    </Wrapper>
  )
}

export default Game