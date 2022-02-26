import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../Assets/Publications.jpg';
import "@fontsource/merriweather";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  font-family: merriweather;
  padding: 1.5em;

@media screen and (min-width: 768px) {
  padding: 2em;
  font-size: 4em;
}

`;

const Subtitle = styled.p`
font-size: 2em;
text-align: center;
color:  white;
  
`;

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  
  @media screen and (min-width: 768px) {

    .jumbo {
      background: url(${boatImage}) no-repeat fixed bottom;
      background-size: cover;
      color: #efefef;
      height: 450px;
      position: relative;
      z-index: -2;
    }
    .overlay {
      background-color: #000;
      opacity: 0.2;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
    
    }

  
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Title> Publications </Title>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;