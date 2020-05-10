import React from 'react'
import Banner from './Banner/index'
import './index.css'
class Contentdata extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="box">
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="banner">
                        <Banner />
                    </div>
                </div>
            </div>
        );
    }
}
export default Contentdata;