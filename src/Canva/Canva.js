import React, { Component } from 'react';
import './Canva.css';
import Card from './CardMessage.js';
import CardImage from './CardImage.js';

export default class Canva extends Component {
    
    render() {
<<<<<<< HEAD
      return <div className='canva'>
          <h1>COMING SOON!</h1>
      </div>
=======

        let font = {fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px'};
      return <>
          <Card font={font} image='image' frame='7px solid #ACCCD7' background='#ACCCD7' message='Congratulations!' ></Card>
          {/* <CardImage font={font} image='https://www.goddardvetgroup.co.uk/content/uploads/2018/01/rabbitcosts.png' frame='7px solid #F69188' background='#ACCCD7' message='Some Bunny Loves You' ></CardImage> */}
          </>
>>>>>>> upstream/master
    }
}