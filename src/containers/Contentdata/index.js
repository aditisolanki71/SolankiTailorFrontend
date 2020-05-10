import React from 'react'
import Banner from './Banner/index'
import Womenbanner from './Womenbanner/index'
import Topdesign from './Topdesign/index'
import Testinomial from './Testinomial/index'
import Slider from './Slider/index'
import './index.css'
class Contentdata extends React.Component {
    render() {
        return (
            <div>
                {/* slider */}
                <div className="row">
                    {/* <div className="box">
                    </div> */}
                    <Slider />
                </div>
                <br/>
                <div className="row">
                    <div className="banner">
                        <Banner />
                    </div>
                </div>
                <div className="row">
                    <div className ="women-banner">
                        <Womenbanner />
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        <Topdesign />
                    </div>
                </div>
                <div className ="row">
                    <div className="">
                        <Testinomial />
                    </div>
                </div>
            </div>
        );
    }
}
export default Contentdata;