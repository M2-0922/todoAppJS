window.addEventListener("load", () => {
  let inputData = document.getElementById("todo-input");
  let addButton = document.getElementById("todo-add");
  let todoList = document.getElementById("todos-list");
  let searchInput = document.getElementById("todo-search");

  addButton.addEventListener("click", () => {
    let newTodo = document.createElement("li");
    // newTodo.classList.add("li-list");
    newTodo.innerHTML = inputData.value;
    if (inputData.value) {
      let deleteButton = document.createElement("button");
      var checkbox = document.createElement("INPUT");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("check-box");
      //   newTodo.innerHTML = inputData.value;

      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete-button");

      newTodo.appendChild(checkbox);
      todoList.appendChild(newTodo);
      newTodo.appendChild(deleteButton);
      //   newTodo.innerHTML = inputData.value;

      inputData.value = "";

      delete button;
      deleteButton.addEventListener("click", () => {
        alert("do you really want to delete ?");
        newTodo.remove();
        deleteButton.remove();
        checkbox.remove();
      });
    }

    // also add checkbox to your todo while creating.
  });

  searchInput.addEventListener("keyup", () => {
    let searchData = searchInput.value;

    let todos = Array.from(todoList.children);

    todos.forEach((todo) => {
      if (todo.innerText.includes(searchData)) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    });

    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].innerText.includes(searchData)) {
    //     todos[i].style.display = "block";
    //   } else {
    //     todos[i].style.display = "none";
    //   }
    // }
  });
});
