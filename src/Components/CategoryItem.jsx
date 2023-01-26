import React from 'react'
import styled from 'styled-components'


const CategoryItem = ({item}) => {
  return (

    <Container>

      <Image src = {item.img}/>

      <Info>

        <Title>{item.title}</Title>

        <Buttom>
          
          <Text>SHOP NOW</Text> 
          
        </Buttom>

      </Info>
      
    </Container>

  )
}

export default CategoryItem

const Container = styled.div`display:flex; position: relative; margin:10px; height:100vh`


const Image = styled.img`width:100%; height:60%; border-radius:10px; object-fit:cover`

const Info = styled.p`display:flex; position:absolute; left:50px; top: 120px; flex-direction:column`

const Title = styled.h2`font-weight:bold; color:#fff`

const Buttom = styled.button`background-color:#fff; cursor:pointer; border:none; padding:10px; border-radius:10px`

const Text = styled.text`font-weight:bold; color:gray`