import React from "react";

import styled from "styled-components";



  const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 50px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;


const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 7px;
`;



const Contact = () => {

  return (<section id="contact">
  
  
  <section id="contact">


  <HomeTitle data-aos="zoom-in">
  Download our App and Report any issue around you
  </HomeTitle>

  
  <div>
    <Button primary href = "https://drive.google.com/open?id=1vN3G27AqNOStDvZc19GJadLvG2F1_uo5">Download</Button>
  </div>
  </section>
  
  </section>);




};

export default Contact;