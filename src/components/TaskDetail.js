import React, { useState, useEffect } from "react";

function TaskDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, );

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`http://localhost:4000/tasks/${match.params.id}`);
    const item = await fetchItem.json();

    setItem(item);
  };

  return (
    <div>
      <h1>Title: {item.title}</h1>
      <p>Status: {item.status}</p>
      <p>Second Status: {item.status2}</p>
    </div>
  );
}

export default TaskDetail;
