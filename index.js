window.addEventListener("load", () => {

    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");
    
    addButton.addEventListener("click", () => {
        if (inputData.value != "") {
    
            // add new todo list
            let newTodo = document.createElement("li");
            newTodo.innerHTML = inputData.value;
            todoList.appendChild(newTodo);
        
            // set checkbox
            let checkButton = document.createElement("input");
            checkButton.type = 'checkbox';
            checkButton.classList.add("check-button");
            newTodo.appendChild(checkButton);
            
            // set delete button
            let deleteButton = document.createElement("button");
            // deleteButton.innerText = "Delete"
            // deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
            deleteButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
            deleteButton.classList.add("delete-button");
            newTodo.appendChild(deleteButton);
            
            // event of delete button
            deleteButton.addEventListener("click", (e) => {
                e.preventDefault();
                Swal.fire({
                    icon: 'question',
                    showCancelButton: true,
                    text: "do you realy want to delete ?",
                    confirmButtonColor: '#090D11',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        deleteList(deleteButton);
                    }
                });
            })
    
            // delete list method for delete button
            let deleteList = (list) => {
                let chosenList = list.closest("li");
                todoList.removeChild(chosenList);
            }
    
        } else {
            Swal.fire({
                icon:"warning",
                text: "Please input something.",
                confirmButtonColor: '#090D11',
            });
        }
    
        inputData.value = "";
    
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

