import React from 'react'
import  img1 from '../images/img1.jpg'
import  img2 from '../images/img2.jpg'
import  img4 from '../images/img4.jpg'
import  img5 from '../images/img5.jpg'
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

class Slider extends React.Component {
    render() {
        return (
            <Carousel autoplay>
    <div>
      <img src={img1}></img>
    </div>
    <div>
      <img src={img2}></img>
    </div>
    <div>
    <img src={img4}></img>
    </div>
    <div>
    <img src={img5}></img>
    </div>
  </Carousel>
  
        );
    }
}

export default Slider;