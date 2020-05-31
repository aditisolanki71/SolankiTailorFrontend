import React from "react";
import Header from "./containers/Dashboard/header";
import SidebarPage from "./containers/Dashboard/sidebar";
import Banner from "./containers/Dashboard/banner";
import Topdesign from "./containers/Dashboard/top-design";
import Testimonial from "./containers/Dashboard/testimonial";
import Footer from "./containers/Dashboard/footer";
import { listApi as allMainCategory } from "./redux/modules/main-category";
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
    };
  }
  componentWillMount() {
    this.fetchMainCategoryData();
  }
  fetchMainCategoryData() {
    return allMainCategory().then((data) => {
      this.setState({ mainCategoryList: data });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <SidebarPage />
        <Banner list={this.state.mainCategoryList} />
        <Topdesign />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
