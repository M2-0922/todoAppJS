window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        newTodo.innerHTML = inputData.value;//このヴァリューはどこから
        let deleteButton = document.createElement("button");
        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type","checkbox");
        deleteButton.innerText = "Delete"
        // deleteButton.classList.add("delete-button");
 
        todoList.appendChild(deleteButton);
        todoList.appendChild(newTodo);
        todoList.appendChild(checkBox);
        inputData.value = "";

        // delete button
        deleteButton.addEventListener("click", () => {
            alert("do you realy want to delete ?");
         })
        
         deleteButton.addEventListener("click",() =>{
            console.log("aleertclicked");
            todoList.removeChild(newTodo);
            todoList.removeChild(deleteButton);
            todoList.removeChild(checkBox);//I couldn't change the place of checkbox
         })
         

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