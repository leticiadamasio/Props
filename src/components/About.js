import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
   color: white;
   padding-top: 2vh;
   font-family: 'Pacifico', cursive;
`

const Container = styled.div`
   background-color: #ee9b00;
   width:40vw;
   height:40vh;
   text-align:center;
   margin-left: 4vh;
   
`
const List = styled.ul`
   list-style:none;
   text-align: justify;
   color: white;
   font-size: 3.5vh;
   font-family: 'Poppins', sans-serif;
`
 
const About = ({li,li2,li3,children}) => {
    return (
      <Container>
        <Title>Mini Lista</Title>
        <List>
         <li>Nome: {li}</li>
         <li>Idade: {li2}</li>
         <li>O que pretendo estudar: {li3}</li>
         {children}
        </List>
      </Container>
    )
}

export default About 