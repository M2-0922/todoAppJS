window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");
    let myli = document.getElementById("myli");

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        newTodo.innerHTML = inputData.value;
        let deleteButton = document.createElement("button");
        let myInput = document.createElement("Input");
        myInput.setAttribute("type", "checkbox");

        deleteButton.innerText = "Delete"
        deleteButton.classList.add("delete-button");

        todoList.appendChild(myInput);
        todoList.appendChild(deleteButton);
        todoList.appendChild(newTodo);


        inputData.value = "";

        // delete button
        deleteButton.addEventListener("click", () => {
            let text = "do you realy want to delete ?";

            if (confirm(text) == true) {
                let deleteit = document.getElementById("todos-list");
                newTodo.remove();
                deleteButton.remove();
                myInput.remove();
            } else {
                return null;
              }        })

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