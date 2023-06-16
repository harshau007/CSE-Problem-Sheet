import React, { useState, useRef, useEffect } from "react";

const CheatSheet = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openDialog = (topic) => {
    setSelectedTopic(topic);
    document.body.classList.add("dialog-open");
  };

  const closeDialog = () => {
    setSelectedTopic(null);
    document.body.classList.remove("dialog-open");
  };

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      closeDialog();
    }
  };


  return (
    <div className="container">
      <h2>SDE Cheat Sheet</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id} onClick={() => openDialog(topic)} className={topic.attempted ? "attempted" : ""}>
            <h3>{topic.title}</h3>
          </li>
        ))}
      </ul>

      {selectedTopic && (
        <div className={`dialog ${selectedTopic ? "open" : ""}`}>
          <div className="dialog-content" ref={dialogRef}>
            <h3>{selectedTopic.title}</h3>
            <p>{selectedTopic.description}</p>
            {selectedTopic.url && (
              <a
                href={selectedTopic.url}
                target="_blank"
                rel="noopener noreferrer">
                Problem
              </a>
            )}
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheatSheet;
