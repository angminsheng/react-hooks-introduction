import React, { useState, useEffect } from "react";
import todo from "./lists.json";

const ToDoHooks = () => {
  const [lists, setLists] = useState(todo.slice());
  const [inputs, setInputs] = useState({ title: "", description: "" });

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, description } = inputs;
    setLists([...lists, { title, description }]);
    setInputs({ title: "", description: "" });
  };

  useEffect(() => {
    document.title = `${lists.length} to dos`;
  }, [lists]);

  return (
    <div>
      {lists.map(({ title, description }) => (
        <div
          style={{ border: "1px solid black", padding: "20px", margin: "20px" }}
          key={title}
        >
          <h3>{title}</h3>
          <div>{description}</div>
          <button
            onClick={() => setLists(lists.filter(list => list.title !== title))}
          >
            delete
          </button>
        </div>
      ))}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={inputs.title}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          value={inputs.description}
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  );
};

export default ToDoHooks;
