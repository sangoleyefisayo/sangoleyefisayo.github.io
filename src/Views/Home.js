import React from 'react';
import styled from 'styled-components';
import '../Academicons/css/academicons.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myImage from '../Assets/portrait.jpg';
import cv from '../Assets/CV.pdf'
import "@fontsource/roboto";


const A = styled.a`
  font-size: 40px;
  color: #282a38;
  &:hover {
    color: #696e94;
    text-decoration: none;
  }
`;
const Title = styled.h4`
    color: #2291e6;
    `;
const Subtitle = styled.h2`
    // color: #2291e6;
    margin-bottom: -10px;
  
`;


const Red = styled.span`
color: #ff0000;
font-weight: bold;
`;


const Grid = styled.div`
* {
  box-sizing: border-box;
  padding-bottom: 15px;
}

.photo {
  flex: 1;
  width: 100%;
  padding-left: 130px;
  padding-right: 40px;
  text-align: justify;

}
.description {
  flex: 1;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justify;
  font-family: "Roboto";

}


@media screen and (min-width: 768px) {

.header {
  padding: 10px;
}

.photo {
  width: 45%;
  float: left;
  padding-top: 30px;
  padding-left: 18%;
  padding-right: 2%;
  text-align: justify;
  }
.description {
  width: 55%;
  float: right;
  padding-top: 30px;
  padding-left: 5px;
  padding-right: 18%;
  text-align: justify;
  font-family: "Roboto";
  font-size: 20px;
}

}

  
`;
function Home() {
  return (
    <div>
      <Grid>
      
  
      <div className="photo">
      <img src={myImage} alt="My Photo"  width="80%" aspectRatio="863/1133"/>
      </div>

      <div className="description">
        
      <Subtitle>Nafis Irtija</Subtitle>
      Research Assistant<br/>
      Department of Electrical and Computer Engineering<br/>
      University of New Mexico<br/>
      <A href="https://scholar.google.com/citations?user=zCQqr3MAAAAJ"><span class="ai ai-google-scholar-square ai-small ai-fw"></span></A>
      <A href="https://www.linkedin.com/in/nafisirtija/"> <FontAwesomeIcon icon={faLinkedin}/></A>
      <A href={cv} download="Nafis_Irtija_CV"><span class="ai ai-cv ai-small ai-fiwd"></span></A>
      <A href="mailto:nafis@unm.edu"> <FontAwesomeIcon icon={faEnvelope}/></A>
      
      <p>I am a final year PhD student in Computer Engineering at the University of New Mexico, expecting to graduate in Spring 2023. My research involves Embedded System Engineering, 
        System on Chip (SOC) Engineering, Register-Transfer Level Design, and Hardware-Software Co-design. Currently, 
        I am collaborating with the Sandia National Laboratory, USA, as a research assistant and planning to find a research position
         in the Hardware industry to make an impact on the field.</p>

      </div>
            </Grid>
    </div>
  );
}

export default Home;






