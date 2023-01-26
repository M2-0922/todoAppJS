window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");
    let buttonList = [];
    let count = 0;

    /**
     * add button action
    */
    addButton.addEventListener("click", () => {
        //make li element
        let newTodo = document.createElement("li");
        newTodo.setAttribute("id", "todo-" + String(count));

        //make checkbox
        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", "check-" + String(count));

        //make delete button element
        newTodo.innerHTML = inputData.value;
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "deleteBtn");
        deleteButton.setAttribute("id", "dBtn-" + String(count));
        deleteButton.innerText = "Delete"
        // deleteButton.classList.add("delete-button");
        
        todoList.appendChild(deleteButton);
        todoList.appendChild(checkBox);
        todoList.appendChild(newTodo);

        inputData.value = "";

        /**
         * checkbox action
        */
        checkBox.addEventListener("click", () => {
            if(checkBox.checked)
                checkBox.checked = true;
            else
                checkBox.checked = false;
        });

        /**
         * delete button action
        */
        deleteButton.addEventListener("click", () => {
            //alert("do you really want to delete ?");
            
            let num = deleteButton.getAttribute("id").substring(5);
            let targetCheckbox = document.getElementById("check-" + String(num));
            let targetLi = document.getElementById("todo-" + String(num));

            //checked
            if(targetCheckbox.checked == true){
                if(window.confirm("do you really want to delete?")){
                    //remove 
                    targetLi.remove();
                    targetCheckbox.remove();
                    deleteButton.remove();
                }else{
                    alert("Canceled.");
                }
            //no checked
            }else{
                if(window.confirm("You don't have it checked, really want to delete?")){
                    //remove 
                    targetLi.remove();
                    targetCheckbox.remove();
                    deleteButton.remove();
                }else{
                    alert("Canceled.");
                }
            }
        })

        // also add checkbox to your todo while creating.
        // buttonList.push(document.querySelectorAll(".deleteBtn"));
        count ++;
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
