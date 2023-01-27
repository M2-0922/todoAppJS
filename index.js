window.addEventListener("load", () => {

    // When we edit the todo, after that while we are deleting it shows the old text,
    // please find a way to change this text to new version of text

    // please put validation for inputs, that you cannot add empty todo to the list.
    // also check while editing.

    // please search: how we can hold the information in localStorage.
    // you can use stackoverflow, google search, etc.
    // please apply localStorage to todo Application

    // once you done with those questions, please create your own branch on top of bug-fix branch
    // branch name ex: bug-fix-kubilay
    // push them to repo

    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");
    const message = "Please fill in something.";

    inputData.addEventListener("keyup", (event) => {
        // console.log(event);
        if(event.key === "Enter"){
            addButton.click();
            // trigger the event
        }
    });

    addButton.addEventListener("click", () => {
        //check inputData value
        if(inputData.value != ""){
            let newTodo = document.createElement("li");
            let deleteButton = document.createElement("button");
            let isCompleted = document.createElement("input");
            let editButton = document.createElement("button");

            // EditButton
            editButton.innerHTML = "Edit";
            editButton.classList.add("edit-button");

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
            newTodo.appendChild(editButton);
            // insertBefore takes 2 arguments, first the element that you want to add
            // second argument is the location, which node you want to put before

            // todoList appends
            
            todoList.appendChild(newTodo);

            //save inputData to localStorage
            manageLocalStorage(inputData.value);
            // reset the input
            inputData.value = "";

            //let valueOfNewTodo = newTodo.innerText.split("Delete")[0];

            deleteButton.addEventListener("click", () => {
                let valueOfNewTodo = newTodo.innerText.split("Delete")[0];
                let isAccept = confirm(valueOfNewTodo + " will deleted, are you sure ?");

                if(isAccept){
                    newTodo.remove();
                    deleteButton.remove();
                }else{
                    console.log("Sorry");
                }
            });

            editButton.addEventListener("click", () => {
                let editInput = document.createElement("input");
                let saveButton = document.createElement("button");

                // saveButton
                saveButton.innerHTML = "Save";
                saveButton.classList.add("save-button");

                // editInput 
                editInput.classList.add("edit-input");
                editInput.value = newTodo.innerText.split("Delete")[0];
                // ["content", "Edit"]

                newTodo.innerHTML = "";
                newTodo.appendChild(editInput);
                newTodo.appendChild(saveButton);

                saveButton.addEventListener("click", () => {
                    //check editInput value
                    if(editInput.value != "" ){
                        newTodo.innerHTML = "";
                        newTodo.appendChild(isCompleted);
                        newTodo.appendChild(document.createTextNode(editInput.value));
                        newTodo.appendChild(deleteButton);
                        newTodo.appendChild(editButton);
                    }else{
                        alert(message);
                    }
                })
                
                editInput.addEventListener("keyup", (e) => {
                    if(e.key === "Enter"){
                        saveButton.click();
                    }
                })
            })
        }else{
            alert(message);
        }
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

    /**
     * manage localStorage
     * save inputData value max 30.
     * When localStorage size  is reached 15, all localStorage items are deleted.
     * @param inputData : todo data value
    */
    function manageLocalStorage(inputData) {
        if(localStorage.length > 15)
            localStorage.clear();

        localStorage.setItem('todo-' + String(localStorage.length), inputData);
    }
})