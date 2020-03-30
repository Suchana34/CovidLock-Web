import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Footer extends Component{

  render(){
    return(
        <div>
            
        <Card style = {{'width' : '100%', border: 'none',
         boxShadow: '0px -2px 5px 0px rgba(0,0,0,0.15)'}}>
          <Card.Title style = {{'text-align': 'center', padding: 1 + 'rem', fontSize: 2 + 'rem'}}>Created with <span>❤</span>  by Suchana</Card.Title>
          <Card.Text style = {{'text-align': 'center', padding: 0.3 + 'rem', fontSize: 1 + 'rem'}}>© {new Date().getFullYear()} Jobless Coders. All rights reserved.</Card.Text>
        </Card>
        </div>
    ); 
  }
}
export default Footer;