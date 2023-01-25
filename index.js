window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");
    let taskNum = 1;

    addButton.addEventListener("click", () => {
        if (inputData.value != "") {
            let newTodo = document.createElement("li");
            newTodo.innerHTML = inputData.value;
            newTodo.id = "Task" + taskNum;
            
            // create delete button
            let deleteButton = document.createElement("button");
            deleteButton.id = "deleteButton" + taskNum;
            deleteButton.innerText = "Delete"
            deleteButton.classList.add("delete-button");

            deleteButton.addEventListener('click', () => {
                let deleteConfirm = confirm("Do you really want to delete ?");
                if (deleteConfirm) {
                    todoList.removeChild(deleteButton.parentElement);
                }
            })

            // create checkbox
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'checkbox' + taskNum;
            checkbox.id = 'checkbox' + taskNum;
            checkbox.addEventListener('change', e => {
                if (e.target.checked) {
                    if (confirm("You finished the task! Do you want to delete ?")) {
                        todoList.removeChild(checkbox.parentElement);
                    }
                }
            })
    
            // add checkbox and delete button to the list element
            newTodo.prepend(checkbox);
            newTodo.appendChild(deleteButton);
            todoList.appendChild(newTodo);
    
            inputData.value = "";
            taskNum++;
        }

        // delete button
        // deleteButton.addEventListener("click", () => {
        //     alert("do you realy want to delete ?");
        // })

        // also add checkbox to your todo while creating.

    })

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

        for(let i = 0; i < todos.length; i++){
            if(todos[i].innerText.includes(searchData)){
                todos[i].style.display = "grid";
            }else{
                todos[i].style.display = "none";
            }
        }
    })
})