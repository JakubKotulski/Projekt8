import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Tasks() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:4000/tasks");

    const items = await data.json();
    setItems(items);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item._id}>
          <Link to={`/tasks/${ item._id }` }>Task title: {item.title}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Tasks;
