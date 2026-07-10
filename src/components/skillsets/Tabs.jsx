import { useState } from "react";
import TabContent from "./TabContent";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 border-b-2 dark:border-gray-700">
        {tabsContent.map((tabItem, index) => (
          <button
            key={index}
            className={`py-2 px-4 cursor-pointer font-semibold text-lg md:text-xl ${
              currentTabIndex === index
                ? "border-b-4 border-blue-500 text-blue-500 dark:text-green-500 dark:border-green-500"
                : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-green-500"
            }`}
            onClick={() => handleOnClick(index)}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <TabContent content={tabsContent[currentTabIndex].content} />
      </div>
    </div>
  );
}
