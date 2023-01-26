import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Product = ({item}) => {
  return (

    <Container>

        <Circle/>

        <Image src = {item.img} />

          <Wrapper>

            <Icon>

              <SearchOutlined/>

            </Icon>

            <Icon>


              <ShoppingCartOutlined/>

            </Icon>

            <Icon>

      
              <FavoriteBorderOutlined/>

            </Icon>

        </Wrapper>

    </Container>

  )
}

export default Product


const Wrapper = styled.div`display: flex; flex-direction:row; justify-content:center; align-items:center;

                        position:absolute; z-index:3 ;  background-color: rgba(0,0,0,0.25);min-width:100%; height:100%;
                        
                        opacity: 0;

                        transition: all 0.5s ease;
                        `


const Container = styled.div`display:flex; flex:1; min-width:280px; height:350px; position:relative;
                  align-items:center; justify-content:center; background-color:#a5d3d4; margin:5px;

                  &:hover ${Wrapper} {

                    opacity: 1;

                  }`

const Circle = styled.div`display:flex; width:200px; height:200px; border-radius:50%;
                           background-color:#fff; position: absolute;`

const Image = styled.img`height:70%; z-index:2`

const Icon = styled.div`width:45px; height:45px; background-color:#fff; border-radius:50%;
                        display:flex; justify-content:center; align-items:center;
                        margin:5px;
                        transition: all 0.48s ease;
                        &:hover{
                          background-color: #e9f5f5; 
                          transform: scale(1.2);
                        }`                        

