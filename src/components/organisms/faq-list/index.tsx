import { Faq, FaqProps } from "../../molecules/faq";

interface FaqListProps {
  faqArray: FaqProps[];
}

export const FaqList: (props: FaqListProps) => JSX.Element = ({ faqArray }) => {
  return (
    <ul className="o-faqList">
      {faqArray.map((faq, index) => (
        <li className="o-faqList__item" key={index}>
          <Faq {...faq} />
        </li>
      ))}
    </ul>
  );
};
