import React from 'react';
import styled from 'styled-components';
import '../Academicons/css/academicons.css';
// import logo from '../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faFacebookSquare,faRedditSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import myImage from '../Assets/me.jpg';
import myImage from '../Assets/portrait.jpg';

const A = styled.a`
  font-size: 2vw;
`;
const Title = styled.h4`
    color: #2291e6;
    `;
const Subtitle = styled.h5`
    color: #2291e6;
  
`;

const Ul = styled.ul`
  list-style-type: none;
  
  li {
  &:before {
    content: "~";
  }
}
  //list-style-position: inside;
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

.main {
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justify;

}


@media screen and (min-width: 768px) {

.header {
  padding: 10px;
}

.main {
  width: 100%;
  float: left;
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 80px;
  text-align: justify;
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
      
  
      <div className="main">
      <img src={myImage} alt="My Photo"  width="400vw" height="400vw"/>
      Nafis Irtija <br/>
      Research Assistant<br/>
      Department of Electrical and Computer Engineering<br/>
      University of New Mexico<br/>
      <A href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitterSquare}/></A>
      <A href="https://facebook.com/"> <FontAwesomeIcon icon={faFacebookSquare}/></A>
      <A href="https://reddit.com/"> <FontAwesomeIcon icon={faRedditSquare}/></A>
      <A href="https://scholar.google.com/"><i class="ai ai-google-scholar-square ai-1x"></i></A>
      {/* <i class="ai ai-google-scholar-square ai-3x"></i> */}

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






