import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons'


const Navbar = () => {
  return (

    <Container>

      <Wrapper>
        
        <Left>
         
          <Language>

            <LanguageTxt>Language</LanguageTxt> 

              <Input/> 
              
              <Search/>
            
            </Language>
        
        </Left>

        <Center><Logo>Mini_Ecommerce</Logo></Center>

        <Right></Right>
        
        
      </Wrapper>

    </Container>


  )
}

export default Navbar

const Container = styled.div`height:80px;`

const Wrapper = styled.div`display:flex; flex-direction:'row'; justify-content:space-between;`

const Left = styled.div`flex:1; display:flex;`

const Center = styled.div`flex:1`

const Right = styled.div`flex:1`

const Language = styled.span`cursor: pointer; display:flex; flex-direction:row; align-items:center; margin-left:10px;`

const LanguageTxt  = styled.p`font-size:15px; padding-left : 5px; font-weight:bold`

const Input = styled.input`border:1px solid pink; border-radius:10px; padding:10px 10px`;
                    

const Logo = styled.h1`font-weight:bold; text-align:center`;










