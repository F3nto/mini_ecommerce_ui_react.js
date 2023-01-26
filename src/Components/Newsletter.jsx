import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
  return (


    <Container>

        <Title>Newsletter</Title>

        <Description>Get Timely Updates From Your Favorite Products.</Description>

        <InputContainer>
        
            <Input placeholder='Your Email'/>



            <Button>

                <Send />

            </Button>


        
        </InputContainer>







    </Container>
  )
}

export default Newsletter

const Container = styled.div`height:60vh; background-color:#fcf5f5;
                display:flex; flex-direction:column; align-items:center;justify-content:center`

const Title = styled.h1`font-size:70px; margin-bottom: 10px; font-weight:bold`

const Description = styled.p`font-size:24px; font-weight:300; margin-bottom: 25px;`

const InputContainer = styled.div`width:50%; height:40px; background-color:#fff; border:1px solid lightgray;
                                display:flex; justify-content:space-between`

const Input = styled.input`border:none; display:flex; flex:8; padding-left:20px`

const Button = styled.button`flex:1; background-color:#58a4bf; cursor: pointer; border:none`

