import React from 'react';
import styled from 'styled-components';
import "@fontsource/roboto";
import '../App.css';


const Title = styled.h1`
    color: #2291e6;
    text-align: center;
    font-family: "Roboto";
    
  
`;
const A = styled.a`
    font-weight: bold;
    color: #2291e6;
    font-family: "Roboto";
`;
const Subtitle = styled.h3`
    font-family: "Roboto";
    color: #2291e6;
    text-align: center;
    
  
`;
const Year = styled.p`
    float: right;
`;

const Grid = styled.div`
* {
  box-sizing: border-box;
  padding-bottom: 15px;
  font-family: "Roboto";
}
.main {
  width: 100%;
  padding-left: 25px;
  padding-right: 50px;
  text-align: justify;

}

@media screen and (min-width: 768px) {

.main {
  width: 100%;
  float: left;
  padding-top: 30px;
  padding-left: 400px;
  padding-right: 400px;
  text-align: justify;
}

}
  
  
`;


function Experience() {
    return (
        <div>
            <Grid>     
            <div className="main">    
            <Title>Education</Title>
                <ul>

                <li><b>Ph.D. in Computer Engineering <Year>2020 - Present</Year></b><br/>
                University of New Mexico<br/>
                CGPA: 4.27/4.00<br/>
                Advisor: Dr. Eirini Eleni Tsiropoulou</li>
                <li><b>Master of Science in Computer Engineering <Year>2020 - 2021</Year></b><br/>
                University of New Mexico<br/>
                CGPA: 4.27/4.00<br/>
                Advisor: Dr. Eirini Eleni Tsiropoulou</li>
                <li><b>Bachelor of Science in Electrical and Electronics Engineering <Year>2011 - 2016</Year></b><br/>
                University of Lagos, Nigeria<br/>
                CGPA: 4.05/5.00</li>

                </ul>   
            {/* <Title>Experience</Title>
                <ul>

                
                <li> <b>Research Assistant <Year>2020 - Present</Year></b><br />
                Department of Electrical and Computer Engineering, University of New Mexico<br />In colaboration with Sandia National Laboratories in the NSF-funded project of Quantum Sensing
            (QSense)
                </li>
                
                <li> <b>Teaching Assistant</b><br />  
                Department of Electrical and Computer Engineering, University of New Mexico <br/><br/>
                    <ul>
                        <li><i>ECE131 Programming Fundamentals</i> </li>
                        <li><i>ECE530 Cloud Computing</i> </li>
                        
                    </ul>
                </li>
                <li> <b>Lecturer <Year>2018 - 2019</Year></b><br />   
                Department of Electrical and Electronic Engineering<br/>
                Bangladesh University of Business and Technology (BUBT)

                </li>
                
                </ul>	 */}

            {/* <Title>Awards</Title>
                <ul>
                <li> <b>ITPEC Examination Gold Award <Year>2018</Year></b><br />   
                Fundamental Information Technology Engineer Examination (ITEE-FE) for achieving the highest score among all ITPEC countries.
                </li>
                
                </ul> */}
                </div>
            </Grid>
        </div>
    );
}

export default Experience;