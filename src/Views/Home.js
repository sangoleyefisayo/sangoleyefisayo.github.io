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
  padding-right: 22%;
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
        
      <Subtitle>Fisayo Sangoleye</Subtitle>
      Research Assistant<br/>
      Department of Electrical and Computer Engineering<br/>
      University of New Mexico<br/>
      <A href="https://scholar.google.com/citations?user=JXcHYQ0AAAAJ"><span class="ai ai-google-scholar-square ai-small ai-fw"></span></A>
      <A href="https://www.linkedin.com/in/fisayo-sangoleye/"> <FontAwesomeIcon icon={faLinkedin}/></A>
      <A href={cv} download="Fisayo_Resume"><span class="ai ai-cv ai-small ai-fiwd"></span></A>
      <A href="mailto:sangoleye.fm@gmail.com"> <FontAwesomeIcon icon={faEnvelope}/></A>
      
      <p>I am a Ph.D student in the <a href="http://www.ece.unm.edu/">Department of Electrical and Computer Engineering</a> at The <a href="http://www.unm.edu/">University of New Mexico, USA</a>, a student member of IEEE, and a member of the PROTON lab, with <a href="http://ece-research.unm.edu/tsiropoulou/index.html">Prof. E.E.Tsiropoulou</a> as an advisor.</p>
        <p>I obtained my bachelor’s degree in Electrical and Electronics Engineering from the University of Lagos, Nigeria in 2016.</p>
        <p>My major field of research is Computer Systems and Networks, with interests in resource allocation and optimization in heterogeneous wireless networks, Internet of Things, artificial intelligence, and demand response management, resilience and cybersecurity in smart grid networks using Game Theory, Optimization and Reinforcement Learning techniques.</p>
        <p>I am also a student member of the Institute of Electrical and Electronics Engineers (IEEE), and an active member of the National Society of Black Engineers (NSBE).</p>

      </div>
            </Grid>
    </div>
  );
}

export default Home;






