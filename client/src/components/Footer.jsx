import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  
`
const SocialContainer = styled.div`
  display: flex;
  position: absolute;
  float: left;
  left: 220px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Desc = styled.p`
  position: relative;
  top: -50px;
  display: flex;
`

const Footer = () => {
  return (
    <Container>
      <Logo src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF8I1SnFRgS1968WHCrEC39RaQ7Cwm7jQzOi5cmuuyhD4p8a8O'/>
      <Desc>Connect with us on social media</Desc>
      <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
    </Container>
  )
}

export default Footer
