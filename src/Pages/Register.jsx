import React from 'react'
import styled from 'styled-components'

const Register = () => {
  return (

    <Container>

        <Wrapper>

          <Title>CREATE AN ACCOUNT</Title>

            <Form>

                <Input placeholder='Name'/>

                <Input placeholder='Last Name'/>

                <Input placeholder='Username'/>

                <Input placeholder='Email'/>

                <Input placeholder='Password'/>

                <Input placeholder='Confirm Password'/>


                <Agreement>

                    By creating an account, I consent to the processing of my personal 
                    data in accordance with the <b>PRIVACY POLICY</b>

                </Agreement>

                <Button><CreateTxt>CREATE</CreateTxt></Button>

            </Form>



        </Wrapper>


    </Container>

  )
}

export default Register

const Container = styled.div`width:100vw; height:100vh; 
                  background: linear-gradient(rgba(255,255,255,0.28), rgba(255,255,255,0.28)),
                  url("https://i.pinimg.com/originals/bc/ea/2e/bcea2e4677f21715613302d197742eac.jpg") 
                  no-repeat fixed ; background-size: cover; display:flex; justify-content:center; align-items:center`

const Wrapper = styled.div`width:45%; padding:20px; background-color:white; border-radius:7px; box-shadow: 0px 5px 10px #044747;`

const Title = styled.h1`font-size:24px; font-weight:500`
                    
const Form = styled.form`display:flex; flex-wrap:wrap`

const Input = styled.input`flex:1; margin:20px 10px 0px 0px; padding:10px`

const Button = styled.button`width:30%; border:none; padding:15px 15px; background-color: #044747; color:white; 
                            cursor:pointer; border-radius:10px; box-shadow: 0px 5px 10px #044747;`

const CreateTxt = styled.span`font-weight:500; font-size:14px; letter-spacing:2px`

const Agreement = styled.text`font-size:14px; margin:20px 0px`