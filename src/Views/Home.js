import React from 'react';
import styled from 'styled-components';
import '../Academicons/css/academicons.css';
import '../App.css';
// import logo from '../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import myImage from '../Assets/me.jpg';
import myImage from '../Assets/portrait.jpg';
import cv from '../Assets/CV.pdf'


const A = styled.a`
  font-size: 40px;
`;
const Title = styled.h4`
    color: #2291e6;
    `;
const Subtitle = styled.h5`
    // color: #2291e6;
    margin-bottom: -10px;
  
`;

// const Ul = styled.ul`
//   list-style-type: none;
  
//   li {
//   &:before {
//     content: "~";
//   }
// }
//   //list-style-position: inside;
// `;
// const Icon = styled.span`
//   margin-bottom: 0px;
// `;

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
  padding-left: 40px;
  padding-right: 40px;
  text-align: justify;

}
.description {
  flex: 1;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justify;

}


@media screen and (min-width: 768px) {

.header {
  padding: 10px;
}

.photo {
  width: 40%;
  float: left;
  padding-top: 30px;
  padding-left: 18%;
  padding-right: 2%;
  text-align: justify;
  // position: absolute;
}
.description {
  width: 60%;
  float: right;
  padding-top: 30px;
  padding-left: 5px;
  padding-right: 100px;
  text-align: justify;
  // position: relative;
}

}

  
`;
function Home() {
  return (
    <div >
     
      {/* <A href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitterSquare}/></A>
      <A href="https://facebook.com/"> <FontAwesomeIcon icon={faFacebookSquare}/></A>
      <A href="https://reddit.com/"> <FontAwesomeIcon icon={faRedditSquare}/></A>
      <A href="https://linkedin.com/"> <FontAwesomeIcon icon={faLinkedin}/></A> */}
      <Grid>
      
  
      <div className="photo">
      <img src={myImage} alt="My Photo"  width="80%" aspectRatio="863/1133"/>
      </div>

      <div className="description">
        
      <Subtitle>Nafis Irtija</Subtitle>
      Research Assistant<br/>
      Department of Electrical and Computer Engineering<br/>
      University of New Mexico<br/>
      <A href="https://scholar.google.com/"><span class="ai ai-google-scholar-square ai-small ai-fw"></span></A>
      <A href="https://www.linkedin.com/in/nafisirtija/"> <FontAwesomeIcon icon={faLinkedin}/></A>
      <A href={cv} download="Nafis_Irtija_CV"><span class="ai ai-cv ai-small ai-fiwd"></span></A>
      <A href="mailto:nafis@unm.edu"> <FontAwesomeIcon icon={faEnvelope}/></A>
      
      {/* <i class="ai ai-google-scholar-square ai-3x"></i> */}
      <Title>Introduction</Title>
      <p>I am a Ph.D student in the Department of Electrical and Computer Engineering at University of New Mexico, USA, since January 2020, 
        as a member of the PROTON lab with Prof. E.E.Tsiropoulou as an advisor. My research falls under the broad category of Artificial Intelligence 
        and Socio-technological systems. My research interests include Game Theory, Reinforcement Learning, Distributed decision making, Artificial Enabled Solutions, 
        Labor economics and Network economics based personalized pricing and fairness. Before joining UNM, I received my Master’s Degree from the Department of Electrical 
        and Electronic Engineering, University of Dhaka, Bangladesh, in February 2019 and my Bachelor’s Degree from the same department in May 2017.
        
      </p>
     
      
      </div>
            </Grid>
    </div>
  );
}

export default Home;






