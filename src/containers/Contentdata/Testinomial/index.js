import React from 'react'
import './index.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img4 from '../images/img4.jpg'
class Testinomial extends React.Component {
    render() {
        return (
            //  testimonials section 
            <div class="site-section site-section-secondary">
            <div class="site-section-inside">
    
                <div class="section-header">
                    <h2>What the people say</h2>
                </div>
    
                <div class="testimonial-box">
                    <div class="testimonial-content">
                        Their service is by far the most influential I've ever seen.
                    </div>
                    <div class="testimonial-author">
                        <img src={img1} alt="David East" />
                        <h5>David East</h5>
                        <span>King of Firebase</span>
                    </div>
                </div>
    
                <div class="testimonial-box">
                    <div class="testimonial-content">
                        Their service is by far the most influential I've ever seen.
                    </div>
                    <div class="testimonial-author">
                        <img src={img2} alt="Holly Lloyd" />
                        <h5>Holly Lloyd</h5>
                        <span>Queen of Scotch</span>
                    </div>
                </div>
    
                <div class="testimonial-box">
                    <div class="testimonial-content">
                        Their service is by far the most influential I've ever seen.
                    </div>
                    <div class="testimonial-author">
                        <img src={img4} alt="Brad Green" />
                        <h5>Brad Green</h5>
                        <span>King of Angular</span>
                    </div>
                </div>
    
            </div>
            </div>
    
    
        );
    }
}

export default Testinomial;