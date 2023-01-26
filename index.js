window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    addButton.addEventListener("click", () => {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        let newTodo = document.createElement("li");
        newTodo.innerHTML = inputData.value;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete"
        deleteButton.setAttribute('class', 'delete-button');
        
        newTodo.prepend(checkbox);
        todoList.appendChild(newTodo);
        newTodo.appendChild(deleteButton);
        
        inputData.value = "";

        // run an event
        deleteButton.addEventListener("click", evt => {
            evt.preventDefault();
            deleteTasks(deleteButton);
        })

        // delete item
        const deleteTasks = (deleteButton) => {
            const chosenTask = deleteButton.closest('li');
            todoList.removeChild(chosenTask);
        }

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
                todos[i].style.display = "block";
            }else{
                todos[i].style.display = "none";
            }
        }
    })
})