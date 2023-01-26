window.addEventListener("load", () => {
  const SearchInput = document.getElementById("todo-search");
  const InputData = document.getElementById("todo-input");
  const AddButton = document.getElementById("todo-add");
  const TodoList = document.getElementById("todo-list");

  AddButton.addEventListener("click", () => {
    const NewTodo = document.createElement("li");

    NewTodo.innerHTML = InputData.value;

    if (InputData.value) {
      const DeleteButton = document.createElement("button");
      const Checkbox = document.createElement("input");

      DeleteButton.innerText = "Delete";
      DeleteButton.classList.add("delete-button");
      Checkbox.setAttribute("type", "checkbox");
      Checkbox.classList.add("check-box");

      NewTodo.appendChild(Checkbox);
      TodoList.appendChild(NewTodo);
      NewTodo.appendChild(DeleteButton);

      DeleteButton.addEventListener("click", () => {
        alert("Are you sure that you want to delete this todo?");

        NewTodo.remove();
        DeleteButton.remove();
        Checkbox.remove();
      });
    }
  });

  SearchInput.addEventListener("keyup", () => {
    const SearchData = SearchInput.value;
    const Todos = Array.from(TodoList.children);

    Todos.forEach((todo) => {
      if (todo.innerText.includes(SearchData)) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    });
  });
});
