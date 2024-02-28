import sound from "../sounds/complete.mp3";

export default function TodoList({todos, toggleTodo, removeTodo}) {

  const handleSound = (completed) => {
    console.log(completed);

    if(!completed){
      const audio = new Audio(sound);
      audio.play();
    }
  };

  return (
    <ul>
    {todos.length === 0 && "Please do something"}
    {todos.map(todo => {
      return (
      <li key={todo.id}>
        <label >
          <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} onClick={() => handleSound(todo.completed)}/>
          {todo.title}
        </label>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </li>)
    })}
  </ul>
    )
}