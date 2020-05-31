import React, { Component } from "react";
import { Accordion } from "semantic-ui-react";
import FAQItem from "./faq-item";
const faqlist = [
  { id: 1, subject: "sub1", name: "faq1" },
  { id: 2, subject: "sub2", name: "faq2" },
  { id: 3, subject: "sub3", name: "faq3" },
];
class FAQList extends Component {
  handleAccordionClick() {
    console.log("accordian clicked");
  }
  render() {
    return (
      <div>
        <Accordion>
          {faqlist.map((faq, index) => (
            <FAQItem
              key={faq.id}
              onClick={this.handleAccordionClick}
              activeIndex="1"
              index={index}
              faq={faq}
            />
          ))}
        </Accordion>{" "}
      </div>
    );
  }
}
export default FAQList;
