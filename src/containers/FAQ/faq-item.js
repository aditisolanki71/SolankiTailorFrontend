import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

const FAQItem = ({ faq, index, onClick, activeIndex }) => (
  <div className="ui segment" style={{ padding: "9px 12px" }}>
    <Accordion.Title
      index={index}
      active={activeIndex === index}
      onClick={onClick}
    >
      <Icon name="dropdown" />
      {faq.subject}
    </Accordion.Title>
    <Accordion.Content>
      <p>{faq.name}</p>
      {/* {faq.needFeedBack && (
        <div className="kb feedback">
          <div className="text mar-b-5 mar-t-10">
            {__translate("knowledgebase:wasthisarticlehelpful")}
          </div>
          <div className="icons">
            <span
              className="negative-response mar-r-10"
              onClick={() => onFeedBakeClick(faq.id, false)}
            >
              {__translate("comman:no")} <i className="icon thumbs down" />
            </span>
            <span
              className="positive-response"
              onClick={() => onFeedBakeClick(faq.id, true)}
            >
              {__translate("comman:yes")} <i className="icon thumbs up" />
            </span>
          </div>
        </div>
      )} */}
    </Accordion.Content>
  </div>
);

export default FAQItem;
