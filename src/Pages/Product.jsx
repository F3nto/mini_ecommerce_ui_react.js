import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Announcement from '../Components/Announcement'

const Product = () => {
  return (

    <Container>

        <Navbar/>

        <Announcement/>

        <Wrapper>

            <ImgContainer>
            

               <Image src = "https://cdn.shopify.com/s/files/1/0586/8575/1504/products/8857010-INDIGODENIM_01_500x.jpg?v=1647462754"/>
            
            
            </ImgContainer>

            <InfoContainer>

                <Title>Denim Jumpsuit</Title>

                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Desc>

                <Price>$ 20</Price>



                <FilterContainer>

                    <FilterColorContainer>

                        <FilterTitle>Color</FilterTitle>

                        <FilterColor color = "black"/>

                        <FilterColor color = "darkblue"/>

                        <FilterColor color = "gray"/>

                    </FilterColorContainer>

                    
                    <FilterSizeDivContainer>
                    
                    <FilterTitle>Size</FilterTitle>

                    <FilterSizeContainer>

                        <FilterSizeOption>Xs</FilterSizeOption>

                        <FilterSizeOption>S</FilterSizeOption>

                        <FilterSizeOption>M</FilterSizeOption>

                        <FilterSizeOption>L</FilterSizeOption>

                        <FilterSizeOption>XL</FilterSizeOption>
                       

                    </FilterSizeContainer>

                    </FilterSizeDivContainer>

                </FilterContainer>

                <AddContainer>

                    <AmountContainer>

                        <Remove/>

                            <Amount>1</Amount>

                        <Add/>

                    </AmountContainer>

                    <Button>
                        
                       <CartTxt>ADD TO CART</CartTxt>
                        
                    </Button>

                </AddContainer>

            </InfoContainer>

        </Wrapper>


        <Newsletter/>

        <Footer/>




    </Container>

  )
}

export default Product

const Container = styled.div``

const Wrapper = styled.div`display:flex; padding:50px`

const ImgContainer = styled.div``

const Image = styled.img`object-fit:cover; border-top-left-radius:50px; border-bottom-left-radius: 50px;`

const InfoContainer = styled.div`padding-left:50px;`

const Title = styled.h1`font-weight:600;`

const Desc = styled.p`margin:20px 0px`

const Price = styled.span`font-weight:100; font-size:50px`

const FilterContainer = styled.div`width:60% ;display:flex; justify-content:space-between;align-items:center;
                                    margin:20px 0px;`

const FilterColorContainer = styled.div`display:flex; flex-direction:row; align-items:center`

const FilterTitle = styled.span`font-size:25px; font-weight:600; padding:10px`

const FilterColor = styled.div`background-color: ${props => props.color}; width:20px; height:20px; border-radius:50%; 
                                margin:0px 5px; cursor: pointer;`

const FilterSizeContainer = styled.select`padding:10px 10px;`

const FilterSizeOption = styled.option``

const FilterSizeDivContainer = styled.div``

const AddContainer = styled.div`width:60%; display:flex; justify-content:space-between; align-items:center`

const AmountContainer = styled.div`display:flex; align-items:center; margin:5px`

const Amount = styled.span`width:30px; height:30px; border-radius:10px; border:1px solid teal; 
                            display:flex; justify-content:center; align-items:center; margin:0px 5px;`

const Button = styled.button`padding:15px; border:2px solid teal; cursor: pointer; background-color:#206a7c; border-radius:10px;
                            box-shadow: 0px 5px 10px black;`

const CartTxt = styled.text`font-size:14px; font-weight:700; color:white`