function App() {
  return (
    <>
      <div className="container max-w-2xl">
        <div className="todo">
          <div className="todo__header">
            <form id="todo__form">
              <input
                type="text"
                name="todo__title"
                id="todo__title"
                className="todo__title"
                placeholder="Enter an activity"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </form>
          </div>

          <ul className="todo__body"></ul>

          <ul className="todo__body--completed"></ul>

          {/* <li className="todo__item is_completed">
        <p>Todo item</p>
        <div className="todo__buttons">
          <button className="btn todo--delete"><span class="sr-only">todo delete</span></button>
          <button class="btn todo--complete"><span class="sr-only">mark as completed</span></button>
        </div>
      </li> */}
        </div>
      </div>
    </>
  );
}

export default App;
