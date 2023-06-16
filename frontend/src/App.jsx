import React, { useState } from "react";
import "./App.css";
import CheatSheet from "./cheatsheet";

const App = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Two Sum",
      description: (
        "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n" +
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.\n" +
        "You can return the answer in any order."
      ),
      url: "https://leetcode.com/problems/two-sum/",
    },
    {
      id: 2,
      title: "Topic 2",
      description: "Description of Topic 2",
      url: "https://leetcode.com/problems/two-sum/",
    },
    {
      id: 3,
      title: "Topic 3",
      description: "Description of Topic 3",
      url: "https://leetcode.com/problems/two-sum/",
    },
  ]);

  return (
    <div className="App">
      <CheatSheet topics={topics} />
    </div>
  );
};

export default App;
