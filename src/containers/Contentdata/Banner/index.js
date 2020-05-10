import React from 'react'
import './index.css'
import  img1 from '../images/img1.jpg'
import  img2 from '../images/img2.jpg'
import  img4 from '../images/img4.jpg'

class Banner extends React.Component {
    render() {
        return (
            //  features section 
        <div class="site-section">
        <div class="site-section-inside">

            <div class="section-header">
                <h2>Key Features</h2>
            </div>

            <div class="feature-box">
                <img src={img1} alt="Easy to Use" />
                <h5>Easy to Use</h5>
                <p>Just think of how easy this is to use. Toddlers can do it. So can you!</p>
            </div>

            <div class="feature-box">
                <img src={img2} alt="Fun to Use"/>
                <h5>Fun to Use</h5>
                <p>Just think of how easy this is to use. Toddlers can do it. So can you!</p>
            </div>

            <div class="feature-box">
                <img src={img4} alt="Fun to Use"/>
                <h5>You'll Love It</h5>
                <p>Just think of how easy this is to use. Toddlers can do it. So can you!</p>
            </div>

        </div>
        </div>

        );
    }
}
export default Banner;