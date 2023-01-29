import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (

  <Container>

    <Wrapper>

      <Title>SIGN IN</Title>

        <Form>

            <Input placeholder='Email'/>

            <Input placeholder='Password'/>

            
          <Button><CreateTxt>LOGIN</CreateTxt></Button>

          <Link>DO YOU REMEMBER THE PASSWORD?</Link>

          <Link>CREATE A NEW ACCOUNT!</Link>

        </Form>



    </Wrapper>


</Container>

  )
}

export default Login

const Container = styled.div`display: flex; width:100vw; height:100vh;
                            background:linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.28)), url("https://wallpaperaccess.com/full/1437673.jpg")
                            center fixed; background-size:cover; justify-content:center; align-items:center`

const Wrapper = styled.div`width:30% ; padding:20px; background-color:white; border-radius:10px; box-shadow: 0px 5px 10px #044747`

const Title = styled.h1`font-size:24px ; font-weight:500`

const Form = styled.form`display:flex; flex-direction:column; justify-content:center; align-items:center`

const Input = styled.input`flex:1; margin:20px 10px 0px 0px; padding:10px; width:80%; border-radius:10px`

const Button = styled.button`width:30%; border:none; padding:15px 15px; background-color: #044747; color:white; 
                            cursor:pointer; border-radius:10px; box-shadow: 0px 5px 10px #044747; margin-top:20px`

const Link = styled.a`font-size:14px; margin:7px 0px; text-decoration:underline; cursor:pointer; color: #6c6af3`

const CreateTxt = styled.span`font-weight:500; font-size:14px;`

