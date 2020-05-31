import React, { Component, Fragment } from "react";
import { Header, Tab } from "semantic-ui-react";
import HeaderPage from "../Dashboard/header";
import Footer from "../Dashboard/footer";
import FAQList from "./faq-list";
// import img1 from "./../../images/img1.jpg";
// import img2 from "./../../images/img2.jpg";
// import img4 from "./../../images/img4.jpg";
const panes = [
  {
    menuItem: "Tab 1",
    render: () => (
      <Tab.Pane attached={false}>
        <FAQList />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Tab 2",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

class FAQPage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderPage />
        <Header as="h3" textAlign="center" dividing>
          FAQ
        </Header>

        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        <Footer />
      </Fragment>
    );
  }
}
export default FAQPage;
