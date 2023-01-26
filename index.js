window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    window.addEventListener("keyup", (e) => {
        if(e.key === "Enter"){
            addButton.click();
        }
    });

    addButton.addEventListener("click", () => {

        let newTodo = document.createElement("li");
        newTodo.innerHTML = inputData.value;
        let deleteButton = document.createElement("button");
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.style.margin = "0 12px 0 4px";
        
        deleteButton.innerText = "Delete"
        deleteButton.classList.add("delete-button");
        
        newTodo.insertBefore(checkbox, newTodo.childNodes[0])
        // todoList.appendChild(checkbox);
        newTodo.appendChild(deleteButton);
        todoList.appendChild(newTodo);

        inputData.value = "";

        deleteButton.addEventListener("click", () => {
            newTodo.remove();
            deleteButton.remove();
        })

    })
    

    searchInput.addEventListener("keyup", () => {

        let searchData = searchInput.value;

        let todos = Array.from(todoList.children);

        todos.forEach((kubilay) => {
            if(kubilay.innerText.includes(searchData)){
                kubilay.style.display = "block";
            }else{
                kubilay.style.display = "none";
            }
        })

    })

})