import { useId, useState } from "react";

function App() {
  const todoTitle = useId();
  const [todoItem, setTodoItem] = useState([]);

  function handleTodo(event) {
    event.preventDefault();
    console.log(todoItem);
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
                value={todoItem}
                onChange={(event) => setTodoItem(event.target.value)}
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
            <li className="todo__item">
              <p>Todo item</p>
              <div className="todo__buttons">
                <button className="btn todo--delete">
                  <span className="sr-only">todo delete</span>
                </button>
                <button className="btn todo--complete">
                  <span className="sr-only">mark as completed</span>
                </button>
              </div>
            </li>

            {/* <li className="todo__item is_completed">
              <p>Todo item</p>
              <div className="todo__buttons">
                <button className="btn todo--delete">
                  <span className="sr-only">todo delete</span>
                </button>
                <button className="btn todo--complete">
                  <span className="sr-only">mark as completed</span>
                </button>
              </div>
            </li> */}
          </ul>

          <ul className="todo__body--completed"></ul>

          {/* <li className="todo__item is_completed">
        <p>Todo item</p>
        <div className="todo__buttons">
          <button className="btn todo--delete"><span className="sr-only">todo delete</span></button>
          <button className="btn todo--complete"><span className="sr-only">mark as completed</span></button>
        </div>
      </li> */}
        </div>
      </div>
    </>
  );
}

export default App;
