let addButton = document.getElementById("todo-add");
let inputData = document.getElementById("todo-input");
let todoList = document.getElementById("todos-list");
let searchInput = document.getElementById("todo-search");

window.addEventListener("load", () => {
    
    addButton.addEventListener("click", () => {
        if (inputData.value != "") {
            
            // add new todo list
            let newTodo = document.createElement("li");
            newTodo.innerHTML = inputData.value;
            todoList.appendChild(newTodo);
            
            // set checkbox
            let checkButton = document.createElement("input");
            checkButton.type = "checkbox";
            checkButton.classList.add("check-button");
            checkButton.onchange = checkList; //add event handler
            newTodo.appendChild(checkButton);
            
            // event of checkbox
            function checkList() {
                let checkDone = document.getElementsByClassName("check-button");
                for(let i = 0; i < checkDone.length; i++) {
                    if(checkDone[i].checked) {
                        console.log('done');
                        checkDone[i].parentElement.style.textDecoration = "line-through";
                    } else {
                        console.log('not yet');
                        checkDone[i].parentElement.style.textDecoration = "none";
                    }
                }
            }
            
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
                    confirmButtonColor: '#4b8ed9',
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
                confirmButtonColor: '#4b8ed9',
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


