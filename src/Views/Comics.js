import React from 'react';
import styled from 'styled-components';
import "@fontsource/roboto";
import '../App.css';

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
    padding-bottom: 15px;
    text-align: center;

}
.main {
    float: left;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  
  }
  .cartoon {
    width: 100%;
  }

@media screen and (min-width: 768px) {

    * {
        
        box-sizing: border-box;
        word-wrap:break-word;
        padding-bottom: 20px;
    }
    .main {
        float: left;
        width: 100%;
        padding-left: 120px;
        padding-right: 120px;
        text-align: center;
      
      }
      .cartoon {
        width: auto;
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
      <img src="https://abstrusegoose.com/strips/ars_longa_vita_brevis.png" class="cartoon"/></a><br/>
    <a target="_blank" rel="noopener noreferrer"href="https://phdcomics.com/comics.php?f=2037&gt%3BVacations&lt%3B/a&gt%3B&amp%3Bquot%3B">
      <img src="https://phdcomics.com/comics/archive/phd112219s.gif" class="cartoon"/></a><br/>
    <a target="_blank" rel="noopener noreferrer"href="https://xkcd.com/303">
      <img src="https://imgs.xkcd.com/comics/compiling.png" class="cartoon"/></a><br/>
      </Body>
</div>
</Grid>
    </div>
  );
}

export default Comics;