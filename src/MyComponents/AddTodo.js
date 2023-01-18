import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h4>Add a todo</h4>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlfor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            className="form-control"
            value={title} onChange={(e) => setTitle(e.target.value)}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="htmldesc" className="form-label">
            Todo Description
          </label>
          <input type="text"  value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-sn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
