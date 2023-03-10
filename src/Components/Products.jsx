import React from 'react'
import styled from 'styled-components'
import  {popularProducts}  from '../data'
import Product from './Product'

const Products = () => {
  return (

    <Container>

        {popularProducts.map(item => {

                return(

                  <Product item = {item} key = {item.id}/>

                )

            })
        }

    </Container>
  )
}

export default Products

const Container = styled.div`display:flex; flex-wrap:wrap; padding:20px;`