window.addEventListener("load", () => {
  let inputData = document.getElementById("todo-input");
  let addButton = document.getElementById("todo-add");
  let todoList = document.getElementById("todos-list");
  let searchInput = document.getElementById("todo-search");

  addButton.addEventListener("click", () => {
    //Create New List
    let newTodo = document.createElement("li");
    newTodo.innerHTML = inputData.value;

    //Create Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";

    //Create Check Box
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    //Event
    todoList.appendChild(newTodo);
    newTodo.insertBefore(checkbox, newTodo.childNodes[0]);
    newTodo.appendChild(deleteButton);

    inputData.value = "";

    //Click delete button => remove todo and button
    deleteButton.addEventListener("click", () => {
      confirm("do you realy want to delete ?");

      newTodo.remove();
      deleteButton.remove();
      checkbox.remove();
    });
  });

  searchInput.addEventListener("keyup", () => {
    let searchData = searchInput.value;
    let todos = Array.from(todoList.children);

    // todos.forEach((kubilay) => {
    //     if(kubilay.innerText.includes(searchData)){
    //         kubilay.style.display = "block";
    //     }else{
    //         kubilay.style.display = "none";
    //     }
    // })

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].innerText.includes(searchData)) {
        todos[i].style.display = "block";
      } else {
        todos[i].style.display = "none";
      }
    }
  });
});
