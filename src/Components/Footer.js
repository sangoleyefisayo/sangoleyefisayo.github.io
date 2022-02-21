import React from "react";
import styled from 'styled-components';


const Styles = styled.div`
*{
    padding: 0;
    margin-top: 1rem;
    color: #000;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    font-size: 0.65em;
    text-align: center;
    
  }
 
`;
const Em = styled.em`
    font-size: 0.85em;
    font-style: italic;
 
`;

const Footer = () => (
    <div>
        <Styles>
            <p>
            <Em>"I may not have gone where I intended to go, 
            but I think I have ended up where I needed to be."</Em> - Douglas Adams
            </p>
        </Styles>

    </div>
);

export default Footer;