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
    color: #2291e6;
    text-align: center;
    font-family: "Roboto";
    
  
`;

const Grid = styled.div`
* {
  box-sizing: border-box;
  padding-bottom: 15px;
}
.main {
  width: 100%;
  padding-left: 25px;
  padding-right: 50px;
  text-align: justify;
  font-family: "Roboto";

}

@media screen and (min-width: 768px) {

.main {
  width: 100%;
  float: left;
  padding-top: 30px;
  padding-left: 400px;
  padding-right: 400px;
  text-align: justify;
  font-family: "Roboto";
}

}
  
  
`;


function Publications() {
    return (
        <div >
    <Grid>     
    <div className="main">       
    <Title>Journal Paper</Title>
    <ol>

	
    <li> <b>Smart Energy Harvesting for Internet of Things Networks.</b><br />  
 	Sangoleye, F., Irtija, N., & Tsiropoulou, E. E. (2021). Smart Energy Harvesting for Internet of Things Networks. 
     Sensors, 21(8), 2755. <A href="https://www.mdpi.com/1424-8220/21/8/2755/pdf">[PDF]</A>
     </li>
     <li> <b>Contract-Theoretic Demand Response Management in Smart Grid Systems.</b><br />    
	Irtija, N., Sangoleye, F., & Tsiropoulou, E. E. (2020). Contract-Theoretic Demand Response Management in Smart Grid Systems. 
    IEEE Access, 8, 184976-184987. <A href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9220119">[PDF]</A>
    </li>
    </ol>	

    <Title>Conference Paper</Title>
    <ol>
    <li> <b>Data Acquisition in Social Internet of Things based on Contract Theory.</b><br />
	Sangoleye, F., Irtija, N., & Tsiropoulou, E. E. (2021, June). Data Acquisition in Social Internet of Things based on Contract Theory.
     In ICC 2021-IEEE International Conference on Communications (pp. 1-6). IEEE. <A href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9500254">[PDF]</A>
    </li>
    </ol>
    </div>
    </Grid>
        </div>
    );
}

export default Publications;