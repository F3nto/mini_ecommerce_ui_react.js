import React from 'react'
import styled from 'styled-components'


import Announcement  from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const ProductList = () => {
  return (

    <Container>

        <Navbar/>

        <Announcement/>

        <Title>Dresses</Title>


 
        <FilterContainer>


          <Filter>
            
            
            <FilterText>Filter Products : </FilterText>

            <Select>

              <Option disabled selected>Color</Option>

              <Option>White</Option>

              <Option>Black</Option>

              <Option>Red</Option>

              <Option>Blue</Option>

              <Option>Yellow</Option>

              <Option>Green</Option>


            </Select>

            <Select>

              <Option disabled selected>Size</Option>

              <Option>XS</Option>

              <Option>S</Option>

              <Option>M</Option>

              <Option>L</Option>

              <Option>XL</Option>

            </Select>
          
          
          </Filter>

          <Filter>
            
            <FilterText>Sort Products : </FilterText>

            <Select>

              <Option selected disabled>Newest</Option>

              <Option>Price (asc)</Option>

              <Option>Price (desc)</Option>

            </Select>
            
          </Filter>


        </FilterContainer> 

        <Products/>

        <Newsletter/>

        <Footer/>

    
    </Container>
  )
}

export default ProductList

const Container = styled.div``

const Title = styled.h1`margin:20px`

const FilterContainer = styled.div`display:flex ; justify-content:space-between; align-items:center; `

const Filter = styled.div`margin:20px`

const FilterText = styled.span`font-size:20px ; font-weight: 600`

const Select = styled.select`padding:10px; margin-right:20px; border-radius:7px`

const Option = styled.option``


