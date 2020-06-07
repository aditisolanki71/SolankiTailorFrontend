import React, { Component, Fragment } from "react";
import { Header, Tab } from "semantic-ui-react";
import HeaderPage from "../Dashboard/header";
import Footer from "../Dashboard/footer";
import FAQList from "./faq-list";
import { listApi as allFaq } from "./../../redux/modules/faq";
// import img1 from "./../../images/img1.jpg";
// import img2 from "./../../images/img2.jpg";
// import img4 from "./../../images/img4.jpg";
const panes = [
  {
    menuItem: "Tab 1",
    // render: () => (
    //   // <Tab.Pane attached={false}>
    //   <FAQList list={this.data} />
    //   // </Tab.Pane>
    // ),
  },
  {
    menuItem: "Tab 2",
    // render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Tab 3",
    // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

class FAQPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqlist: [],
    };
  }
  data() {
    console.log("data");
  }
  componentWillMount() {
    this.fetchFaqData();
  }
  fetchFaqData() {
    return allFaq().then((data) => {
      this.setState({ faqlist: data });
      console.log("faq data is", data);
    });
  }
  render() {
    return (
      <Fragment>
        <HeaderPage />
        <Header as="h3" textAlign="center" dividing>
          FAQ
        </Header>

        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        <Tab.Pane attached={false}>
          <FAQList list={this.state.faqlist} />
        </Tab.Pane>
        <Footer />
      </Fragment>
    );
  }
}
export default FAQPage;
