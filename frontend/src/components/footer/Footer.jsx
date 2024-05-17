import React from 'react';
import styled from 'styled-components'
const Footer = () => {
  return(
    <>
    <Container>
        <div className="main">
        &copy; Online Voting System
        </div>
    </Container>
    
    </>

  );
};

export default Footer;
const Container = styled.div`
background:transparent;
height:5rem;
width:100vw;
border-top:1px solid black;
box-shadow: 1px 0px 6px black;
display:flex;
align-items:center;
justify-content:center;
`
