window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    inputData.addEventListener("keyup", (event) => {
        // console.log(event);
        if(event.key === "Enter"){
            addButton.click();
            // trigger the event
        }
    });

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        let deleteButton = document.createElement("button");
        let isCompleted = document.createElement("input");

        // Checkbox
        isCompleted.type = "checkbox";
        isCompleted.classList.add("todo-checkbox");

        // Delete button
        deleteButton.innerHTML = "Delete"
        deleteButton.classList.add("delete-button");

        // newTodo
        newTodo.innerHTML = inputData.value;
        newTodo.appendChild(deleteButton);
        newTodo.insertBefore(isCompleted, newTodo.childNodes[0]);
        // insertBefore takes 2 arguments, first the element that you want to add
        // second argument is the location, which node you want to put before

        // todoList appends
        
        todoList.appendChild(newTodo);

        // reset the input
        inputData.value = "";

        let valueOfNewTodo = newTodo.innerText.split("Delete")[0];

        deleteButton.addEventListener("click", () => {
            let isAccept = confirm(valueOfNewTodo + " will deleted, are you sure ?");

            if(isAccept){
                newTodo.remove();
                deleteButton.remove();
            }else{
                console.log("Sorry");
            }
        });
    })

    searchInput.addEventListener("keyup", () => {

        let searchData = searchInput.value;
        let todos = Array.from(todoList.children);
        todos.forEach((todo) => {
            if(todo.innerText.includes(searchData)){
                todo.style.display = "block";
            }else{
                todo.style.display = "none";
            }
        })

    })
})