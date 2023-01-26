import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (

    <Container>
        
        
        <Left>

            <Logo>About Us</Logo>


            <Description>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Description>



            <SocialContainer>

                <SocialIcon color = '#3b5999'>

                    <Facebook/>

                </SocialIcon>

                   <SocialIcon color = '#e4405f'>

                    <Instagram/>

                </SocialIcon>

                   <SocialIcon color = '#55acee'>

                    <Twitter/>

                </SocialIcon>

                   <SocialIcon color = '#e60023'>

                    <Pinterest/>

                </SocialIcon>
                  
            </SocialContainer>
            

        </Left>

        <Center>

          <Title>Useful Links</Title>

          <List>

            <ListItem>Home</ListItem>

            <ListItem>Cart</ListItem>

            <ListItem>Man Fashion</ListItem>

            <ListItem>Woman Fashion</ListItem>

            <ListItem>Accessories</ListItem>

            <ListItem>My Account</ListItem>

            <ListItem>Order Tracking</ListItem>

            <ListItem>Wishlist</ListItem>

            <ListItem>Wishlist</ListItem>

            <ListItem>Terms</ListItem>

          </List>

         

        </Center>

        <Right>

          <ContactTitle>Contact</ContactTitle>

          <ContactItem>
            
            
            <Room style={{marginRight:10}}/>No.99, Diamond Condo, Yankin Township, Yangon
          
          
          </ContactItem>

          <ContactItem>
            
            <Phone style = {{marginRight:10}}/>09 754199668
            
          </ContactItem>

          <ContactItem>
            
            <MailOutline style = {{marginRight:10}}/>fento@gmail.com
            
          </ContactItem>

          <Payment>

            <Visa src = "https://cdn-icons-png.flaticon.com/128/196/196578.png"/>

            <Paypal src = "https://cdn-icons-png.flaticon.com/128/888/888870.png"/>

            <Ebay src = "https://cdn-icons-png.flaticon.com/128/196/196552.png"/>

            <Amazon src = "https://cdn-icons-png.flaticon.com/512/5968/5968202.png"/>

          </Payment>

        </Right>



    </Container>

  )
}

export default Footer

const Container = styled.div`display:flex; background-color:#9eb0b0`

const Left = styled.div`flex:1; display:flex; flex-direction:column; padding:20px`

const Logo = styled.h1``

const Description = styled.p`margin:0; padding:0`

const Center = styled.div`flex:1; padding:20px`

const Right = styled.div`flex:1; padding:20px`

const SocialContainer = styled.div`display:flex; flex-direction:row; align-items:center; margin:10px;`

const SocialIcon = styled.div`width:40px; height:40px; border-radius:50%; background-color:${props => props.color};
                              display:flex; justify-content:center; align-items:center; margin-right:20px; margin-top:20px;
                              cursor:pointer`

const Title = styled.h1``

const List = styled.ul`list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap`

const ListItem = styled.li`width:50%`

const ContactTitle = styled.h1``

const ContactItem = styled.div`display:flex; flex-direction:row; align-items:center;margin:10px`

const Payment = styled.div`display:flex; flex-direction:row;justify-content:space-evenly; align-items:center;
                           `

const Visa = styled.img`width:70px; height:70px; cursor: pointer;`

const Paypal = styled.img`width:70px; height:70px; cursor: pointer;`

const Ebay = styled.img`width:70px; height:70px; cursor: pointer`

const Amazon = styled.img`width:70px; height:70px; cursor: pointer`

