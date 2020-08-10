import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"


const MenuList = styled.ul`
list-style-type: none;
grid-column-start: 2;
grid-row-start: 3;
grid-row-end: 3;
display: grid;
padding-left: 0;
`

const MenuItem = styled.li`
margin-top: 0.75em;
margin-bottom: 0.75em;
justify-self: left;
grid-column-start: 1;

`

const StyledLink = styled(props => <Link {...props} />)`
color: black;
text-decoration: none;
font-family: brandon-grotesque;
justify-self: start;
font-size: 20px;
`
const MainContainer = styled.div`
display: grid;
grid-template-columns: 140px 136px auto auto auto auto auto auto auto auto auto auto 136px 140px;
grid-template-rows: 100px 100px 100px 730px 50px;
`

const MainTitle = styled.p`
z-index: 3;
font-family: Times New Roman;
font-size: 29px;
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;

`

const FooterContainer = styled.div`
grid-column-start: 2;
grid-column-end: 14;
grid-row-start: 5;
margin: 0;
`

const ChildrenContainer = styled.div`
grid-column-start: 2;
grid-column-end: 14;
grid-row-start: 1;
grid-row-end: 5;
`

const FooterText = styled.p`
text-align: left;
font-family: brandon-grotesque;
letter-spacing: 0px;
color: #000000;
opacity: 1;
font-size: 20px;
margin: 10px;
`


export default function Layout({ children }) {
  return (
    <div>
      <MainContainer>
        <MainTitle>Evgenia Bobkova</MainTitle>
        <MenuList>
          <MenuItem><StyledLink to="/" activeStyle={{
            color: "#C11932"
          }}>Home</StyledLink></MenuItem>
          <MenuItem><StyledLink to="/watercolours/" activeStyle={{
            color: "#C11932"
          }}>Watecolours</StyledLink></MenuItem>
          <MenuItem><StyledLink to="/graphics/" activeStyle={{
            color: "#C11932"
          }}>Graphics</StyledLink></MenuItem>
          <MenuItem><StyledLink to="/store/" activeStyle={{
            color: "#C11932"
          }}>Store</StyledLink></MenuItem>
          <MenuItem><StyledLink to="/contact/" activeStyle={{
            color: "#C11932"
          }}>Contact me</StyledLink></MenuItem>
        </MenuList>
        <ChildrenContainer>{children}</ChildrenContainer>
        <FooterContainer>
          <hr></hr>
          <FooterText>© 2020 by Evgeniya Bobkova. Proudly created with Olga Tselyuk</FooterText>
        </FooterContainer>
      </MainContainer>


    </div>
  )
}


//   {children}


// header
//menu

//footer


// when pressed menu item #C11932