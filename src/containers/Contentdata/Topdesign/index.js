import React from 'react'
import './index.css'
import  img1 from '../images/img1.jpg'
import  img2 from '../images/img2.jpg'
import  img4 from '../images/img4.jpg'

class Topdesign extends React.Component {
    render() {
        return (
            //  features section 
        <div class="site-section">
        <div class="site-section-inside1">

            <div class="section-header">
                <h2>Top design</h2>
            </div>

            <div class="feature-box1">
                <img src={img1} alt="Easy to Use" />
                </div>

            <div class="feature-box1">
                <img src={img2} alt="Fun to Use"/>
              </div>

            <div class="feature-box1">
                <img src={img4} alt="Fun to Use"/>
             </div>

             <div class="feature-box1">
                <img src={img1} alt="Easy to Use" />
                </div>

            <div class="feature-box1">
                <img src={img2} alt="Fun to Use"/>
              </div>

        </div>
        </div>

        );
    }
}
export default Topdesign;