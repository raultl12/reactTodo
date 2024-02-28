import { useState } from "react";
export default function NewTodoForm({onSubmit}) {

  const [newItem, setNewItem] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">New task</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Move your fat ass!!"
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
    </>)
}