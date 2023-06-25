import React, { useState } from "react";

interface TabProps {
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const Tab: (props: TabProps) => JSX.Element = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="m-tab">
      <div className="m-tab__header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`m-tab__item ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="m-tab__content">{tabs[activeTab].content}</div>
    </div>
  );
};
