import { useId, useState } from "react";

function App() {
  const todoTitle = useId();
  const [todoText, setTodoText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function handleTodo(event) {
    event.preventDefault();
    const text = todoText.trim();
    if (text === "") {
      return;
    }
    const id = "id" + Date.now();
    setTodoItems((prev) => [...prev, { id, text, completed: false }]);
    setTodoText("");
  }

  function handleDelete(id) {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleComplete(id) {
    setTodoItems((prev) =>
      prev.map(
        (item) => item.id === id && { ...item, completed: !item.completed }
      )
    );
  }

  return (
    <>
      <div className="container max-w-2xl">
        <div className="todo">
          <div className="todo__header">
            <form id="todo__form" onSubmit={handleTodo}>
              <input
                type="text"
                name={todoTitle}
                id={todoTitle}
                className="todo__title"
                placeholder="Enter an activity"
                value={todoText}
                onChange={(event) => setTodoText(event.target.value)}
              />

              <button
                type="submit"
                className="btn todo__create"
                id="todo__create"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </form>
          </div>

          <ul className="todo__body">
            {todoItems.length !== 0 &&
              todoItems.map((item) => (
                <li
                  key={item.id}
                  className={`todo__item ${item.completed && "is_completed"}`}
                >
                  <p>{item.text}</p>
                  <div className="todo__buttons">
                    <button
                      className="btn todo--delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      <span className="sr-only">todo delete</span>
                    </button>
                    <button
                      className="btn todo--complete"
                      onClick={() => handleComplete(item.id)}
                    >
                      <span className="sr-only">mark as completed</span>
                    </button>
                  </div>
                </li>
              ))}
          </ul>

          <ul className="todo__body--completed"></ul>
        </div>
      </div>
    </>
  );
}

export default App;
