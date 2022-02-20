import React from 'react';
import styled from 'styled-components';

// import instructions from '../Assets/DCOSS_2021_User_Guide.pdf'

const Header = styled.div`
* {
    text-align: center;
  } 
  h1 {
    color: #2291e6; 
  }
`;
const Subtitle = styled.h5`
    color: #2291e6;
  
`;
const Grid = styled.div`
* {

    box-sizing: border-box;
    word-wrap:break-word;
    // padding-left: 40px;
    // padding-right: 40px;
    padding-bottom: 15px;
    text-align: justify;

}
a {
    padding: 0 !important;
}
.main {
    float: left;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    text-align: justify;
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
     
      <Header>
    </Header>
    <Grid>
<div className="main">
    <Subtitle>Some of my favorite comics :)</Subtitle>

    <a target="_blank" rel="noopener noreferrer"href="https://abstrusegoose.com/249">
      <img src="https://abstrusegoose.com/strips/ars_longa_vita_brevis.png"/></a><br/>
    <a target="_blank" rel="noopener noreferrer"href="https://phdcomics.com/comics.php?f=2037&gt%3BVacations&lt%3B/a&gt%3B&amp%3Bquot%3B">
      <img src="https://phdcomics.com/comics/archive/phd112219s.gif"/></a><br/>
    <a target="_blank" rel="noopener noreferrer"href="https://xkcd.com/303">
      <img src="https://imgs.xkcd.com/comics/compiling.png"/></a><br/>
{/* <a href="https://abstrusegoose.com/249">
  <img src="https://abstrusegoose.com/strips/ars_longa_vita_brevis.png">
</a>

<a href="https://phdcomics.com/comics.php?f=2037&gt%3BVacations&lt%3B/a&gt%3B&amp%3Bquot%3B">
  <img src="https://phdcomics.com/comics/archive/phd112219s.gif">
</a>

<a href="https://xkcd.com/303">
  <img src="https://imgs.xkcd.com/comics/compiling.png">
</a> */}

</div>
</Grid>
    </div>
  );
}

export default Comics;