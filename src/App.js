import React, { Fragment } from "react";
import Header from "./containers/Dashboard/header";
//import SidebarPage from "./containers/Dashboard/sidebar";
import Slider from "./containers/Dashboard/Slider/slider";
import Banner from "./containers/Dashboard/banner";
import Topdesign from "./containers/Dashboard/top-design";
import Testimonial from "./containers/Dashboard/testimonial";
import Footer from "./containers/Dashboard/footer";
import { listApi as allMainCategory } from "./redux/modules/main-category";
import { listApi as allTestimonial } from "./redux/modules/testimonial";
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCategoryList: [],
      testimonialList: [],
    };
  }
  componentWillMount() {
    this.fetchMainCategoryData();
    this.fetchTestimonialData();
  }
  fetchMainCategoryData() {
    return allMainCategory().then((data) => {
      this.setState({ mainCategoryList: data });
    });
  }
  fetchTestimonialData() {
    return allTestimonial().then((data) => {
      this.setState({ testimonialList: data });
    });
  }
  render() {
    return (
      <Fragment>
        <Header>
          {/* <SidebarPage /> */}
          <Slider slides={images} />
          <Banner list={this.state.mainCategoryList} />
          <Topdesign />
          <Testimonial list={this.state.testimonialList} />
        </Header>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
