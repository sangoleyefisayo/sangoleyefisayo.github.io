import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    color: #2291e6;
    text-align: center;
    
  
`;
const Subtitle = styled.h3`
    color: #2291e6;
    text-align: center;
    
  
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


function Publications() {
    return (
        <div >
    <Grid>     
    <div className="main">       
    <Subtitle>Journal Paper</Subtitle>
    <ol>

      
    <li> <b>Prospect-theoretic Demand Response Management in Smart Grid Systems.</b><br />
	F. Sangoleye, N. Irtija, E. E. Tsiropoulou, and S. Papavassiliou, "Prospect-theoretic Demand Response Management in Smart Grid Systems" in IEEE Systems Journal, 2021. (Under Review).</li>
	
    <li> <b>Energy Efficient Edge Computing Enabled by Satisfaction Games and Approximate Computing</b><br />  
	Irtija, N., Anagnostopoulos, I., Zervakis, G., Tsiropoulou, E., Amrouch, H., Henkel, J., "Energy Efficient Edge Computing Enabled by Satisfaction Games and Approximate Computing" in IEEE Transactions on Green Communications and Networking, 2021. [pdf](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9585566)
	</li>
    <li> <b>Truthful Decentralized Blockchain Oracles.</b><br />   
	Cai, Y., Irtija, N., Tsiropoulou, E. E., & Veneris, A. (2021). Truthful Decentralized Blockchain Oracles. International Journal of Network Management, e2179. [pdf](https://onlinelibrary.wiley.com/doi/pdf/10.1002/nem.2179)
	</li>
    <li> <b>Smart Energy Harvesting for Internet of Things Networks.</b><br />  
 	Sangoleye, F., Irtija, N., & Tsiropoulou, E. E. (2021). Smart Energy Harvesting for Internet of Things Networks. Sensors, 21(8), 2755. [pdf](https://www.mdpi.com/1424-8220/21/8/2755/pdf)
     </li>
     <li> <b>Contract-Theoretic Demand Response Management in Smart Grid Systems.</b><br />    
	Irtija, N., Sangoleye, F., & Tsiropoulou, E. E. (2020). Contract-Theoretic Demand Response Management in Smart Grid Systems. IEEE Access, 8, 184976-184987. [pdf](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9220119)
    </li>
    </ol>	

    <Subtitle>Conference Paper</Subtitle>
    <ol>
    <li> <b>Reconfigurable Intelligent Surfaces enabling Positioning, Navigation, and Timing Services.</b><br />   
	Sahabul, M., Irtija, N., & Tsiropoulou, E. E. (2022). Reconfigurable Intelligent Surfaces enabling Positioning, Navigation, and Timing Services. In ICC 2022-IEEE International Conference on Communications. IEEE. (Under Review).
    </li>
    <li> <b>Data Acquisition in Social Internet of Things based on Contract Theory.</b><br />
	Sangoleye, F., Irtija, N., & Tsiropoulou, E. E. (2021, June). Data Acquisition in Social Internet of Things based on Contract Theory. In ICC 2021-IEEE International Conference on Communications (pp. 1-6). IEEE. [pdf](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9500254)
    </li>
    <li> <b>Fatigue Detection Using Facial Landmarks.</b><br />  
	IRTIJA, N., SAMI, M., & AHAD, M. A. R. (2018). Fatigue Detection Using Facial Landmarks. In International Symposium on Affective Science and Engineering ISASE2018 (pp. 1-6). Japan Society of Kansei Engineering. [pdf](https://www.jstage.jst.go.jp/article/isase/ISASE2018/0/ISASE2018_1_16/_pdf)
    </li>
    </ol>
    </div>
    </Grid>
        </div>
    );
}

export default Publications;