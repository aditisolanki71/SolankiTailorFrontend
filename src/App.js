import React from "react";
import Header from "./containers/Dashboard/header";
//import SidebarPage from "./containers/Dashboard/sidebar";
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
      <div>
        <Header>
          {/* <SidebarPage /> */}
          <Banner list={this.state.mainCategoryList} />
          <Topdesign />
          <Testimonial list={this.state.testimonialList} />
          <Footer />
        </Header>
      </div>
    );
  }
}

export default App;
