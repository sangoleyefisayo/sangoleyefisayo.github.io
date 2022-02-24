import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    text-align: center;
    max-width: 100%
 `;
const Subtitle = styled.h4`
    color: #2291e6;
    text-align: center;
    
  
`;

const Grid = styled.div`
* {

    box-sizing: border-box;
    word-wrap:break-word;
    // padding-left: 40px;
    // padding-right: 40px;
    padding-bottom: 15px;
    text-align: center;

}
.main {
    float: left;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
    // text-justify: inter-word;
  
  }

@media screen and (min-width: 768px) {

    * {
        
        box-sizing: border-box;
        word-wrap:break-word;
        // padding-left: 120px;
        // padding-right: 120px;
        padding-bottom: 20px;
        // text-align: justify;
    }
    .main {
        float: left;
        width: 100%;
        padding-left: 120px;
        padding-right: 120px;
        text-align: center;
      
      }
} 
`;
function Comics() {
  return (
    <div >
     
    <Grid>
<div className="main">
    <Subtitle>Some of my favorite comics :)</Subtitle>
<Body>
    <a target="_blank" rel="noopener noreferrer"href="https://abstrusegoose.com/249">
      <img src="https://abstrusegoose.com/strips/ars_longa_vita_brevis.png"/></a><br/>
    <a target="_blank" rel="noopener noreferrer"href="https://phdcomics.com/comics.php?f=2037&gt%3BVacations&lt%3B/a&gt%3B&amp%3Bquot%3B">
      <img src="https://phdcomics.com/comics/archive/phd112219s.gif"/></a><br/>
    <a target="_blank" rel="noopener noreferrer"href="https://xkcd.com/303">
      <img src="https://imgs.xkcd.com/comics/compiling.png"/></a><br/>
      </Body>
</div>
</Grid>
    </div>
  );
}

export default Comics;