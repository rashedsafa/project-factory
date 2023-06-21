import React, { useState } from "react";
import { Icon } from "../../atoms/icon";

export interface FaqProps {
  question: React.ReactNode;
  answer: React.ReactNode;
}

export const Faq: (props: FaqProps) => JSX.Element = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="m-faq">
      <div className="m-faq_questionWrapper" onClick={toggle}>
        <div className="m-faq_question">{question}</div>
        <div className={`m-faq_icon ${isExpanded ? "minus" : "plus"}`}>
          <Icon icon={`${isExpanded ? "minus" : "plus"}`} />
        </div>
      </div>
      <div className={`m-faq_answer ${isExpanded ? "expanded" : ""}`}>
        {answer}
      </div>
    </div>
  );
};
