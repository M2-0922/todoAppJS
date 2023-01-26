window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Delete"
        // deleteButton.classList.add("delete-button");
 
        todoList.appendChild(deleteButton);
        todoList.appendChild(newTodo);

        inputData.value = "";
        

        let valueOfNewTodo = newTodo.innerText.split("Delete")[0];

        deleteButton.addEventListener("click", () => {
            let isAccept = confirm(valueOfNewTodo + " are u sure?");
            if(isAccept){
                newTodo.remove();
                deleteButton.remove();
            }

        })

    })
    

    searchInput.addEventListener("keyup", () => {

        let searchData = searchInput.value;

        let todos = Array.from(todoList.children);


        for(let i = 0; i < todos.length; i++){
            if(todos[i].innerText.includes(searchData)){
                todos[i].style.display = "block";
            }else{
                todos[i].style.display = "none";
            }
        }
    })
})