import React from "react";
import Tabs from "./Tabs";

const SkillSetsData = () => {
  const data = [
    {
      label: "Skills",
      content: (
        <div className="text-lg md:text-xl dark:text-gray-200">
          <p>
            <strong>Frontend:</strong> Html, Css, ReactJs
          </p>
          <p>
            <strong>Css:</strong> Tailwind Css, Bootstrap, Material Ui
          </p>
          <p>
            <strong>Language:</strong> Javascript, Java
          </p>
          <p>
            <strong>Backend:</strong> Express, MongoDb, NodeJs
          </p>
          <p>
            <strong>DSA:</strong> Data structures in Java
          </p>
        </div>
      ),
    },
    {
      label: "Experience",
      content: (
        <div className="text-lg md:text-xl dark:text-gray-200">
          <p>
            <strong>SIH:</strong> Participated in Smart India Hackathon 2023
          </p>
          <p>
            <strong>Codefest:</strong> Won the Codefest Hackathon held in
            college
          </p>
        </div>
      ),
    },
    {
      label: "Education",
      content: (
        <div className="text-lg md:text-xl dark:text-gray-200">
          <p>
            <strong>BCA:</strong> Bachelors in Computer Application
          </p>
          <p>
            <strong>Duration:</strong> 2021-2024
          </p>
          <p>
            <strong>University:</strong> Birla Institute of Technology Mesra,
            Ranchi
          </p>
        </div>
      ),
    },
  ];

  function handleChange(currentTabIndex) {
    console.log("Current Tab Index:", currentTabIndex);
  }

  return <Tabs tabsContent={data} onChange={handleChange} />;
};

export default SkillSetsData;
