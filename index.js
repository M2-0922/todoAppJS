let listItems = [];
const strage = localStorage; // access to local strage object

window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    // When we edit the todo, after that while we are deleting it shows the old text,
    // please find a way to change this text to new version of text
    // --> ***point1***
    
    // please put validation for inputs, that you cannot add empty todo to the list.
    // also check while editing.
    // --> ***point2***
    
    // please search: how we can hold the information in localStorage.
    // you can use stackoverflow, google search, etc.
    // please apply localStorage to todo Application
    // --> ***point3***
    
    // once you done with those questions, please create your own branch on top of bug-fix branch
    // branch name ex: bug-fix-kubilay
    // push them to repo
    
    
    inputData.addEventListener("keyup", (event) => {
        // console.log(event);
        if(event.key === "Enter"){
            addButton.click();
            // trigger the event
        }
    });
    
    addButton.addEventListener("click", () => {

        let newTodo = document.createElement("li");
        let deleteButton = document.createElement("button");
        let isCompleted = document.createElement("input");
        let editButton = document.createElement("button");

        // ***point2***
        if(inputData.value != "") {

            // ***point3***
            // declare object to store each todoList's state
            const item = { 
                todoItem: inputData.value,
                // isDone: false,
                isDelete: false 
            };
            listItems.push(item);
            strage.store = JSON.stringify(listItems);
            
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
            newTodo.insertBefore(isCompleted, newTodo.childNodes[0]); // insertBefore takes 2 arguments, first the element that you want to add second argument is the location, which node you want to put before
            newTodo.appendChild(editButton);

            // todoList appends
            todoList.appendChild(newTodo);

            // deleteButton event
            let valueOfNewTodo = newTodo.innerText.split("Delete")[0];
            deleteButton.addEventListener("click", () => {
                let isAccept = confirm(valueOfNewTodo + " will deleted, are you sure ?");
                
                if(isAccept){
                    newTodo.remove();
                    deleteButton.remove();
                    item.isDelete = true;
                }else{
                    console.log("Sorry");
                }
            });
            
            // editButton event
            editButton.addEventListener("click", () => {
                let editInput = document.createElement("input");
                let saveButton = document.createElement("button");
                
                // create saveButton
                saveButton.innerHTML = "Save";
                saveButton.classList.add("save-button");
                
                // create editInput
                editInput.classList.add("edit-input");
                editInput.value = newTodo.innerText.split("Delete")[0]; // ["content", "Edit"]
                newTodo.innerHTML = "";
                newTodo.appendChild(editInput);
                newTodo.appendChild(saveButton);
                
                // saveButton event
                saveButton.addEventListener("click", () => {
                    // ***point2***
                    if(editInput.value != "") {
                        // ***point1***
                        let isAccept = confirm(valueOfNewTodo + " will change to " + editInput.value + ", are you sure ?");
                        if(isAccept) {
                            newTodo.innerHTML = "";
                            newTodo.appendChild(isCompleted);
                            newTodo.appendChild(document.createTextNode(editInput.value));
                            newTodo.appendChild(deleteButton);
                            newTodo.appendChild(editButton);
                        } else {
                            console.log('stay');
                        }
                    } else {
                        alert("Please input something.");
                    }
                })
                
                editInput.addEventListener("keyup", (e) => {
                    if(e.key === "Enter"){
                        saveButton.click();
                    }
                })
            })
            
            // reset the input
            inputData.value = "";

        } else {
            alert("Please input something.");
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

})

document.addEventListener("DOMContentLoaded", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    // get data ifrom local strage
    const json = strage.store; // dealare 'json' that has data is stored with store key in local strage
    if (json === undefined) {
        return;
    }
    listItems = JSON.parse(json); // convert format from json to object(array)

    
    for(const item of listItems) {
        
        // const todo = document.createTextNode(item.todoItem); //get text data except tag
        const todo = item.todoItem; //get text data except tag
        console.log(todo);

        let newTodo = document.createElement("li");
        let deleteButton = document.createElement("button");
        let isCompleted = document.createElement("input");
        let editButton = document.createElement("button");
        
        // todoList appends
        todoList.appendChild(newTodo);
        newTodo.innerHTML = todo;
        newTodo.appendChild(deleteButton);
        newTodo.appendChild(editButton);
        newTodo.insertBefore(isCompleted, newTodo.childNodes[0]); // insertBefore takes 2 arguments, first the element that you want to add second argument is the location, which node you want to put before

        let valueOfNewTodo = newTodo.innerText.split("Delete")[0];

        // Checkbox
        isCompleted.type = "checkbox";
        isCompleted.classList.add("todo-checkbox");

        // create edit button
        editButton.innerHTML = "Edit";
        editButton.classList.add("edit-button");
        
        // set editButton event
        editButton.addEventListener("click", () => {
            let editInput = document.createElement("input");
            let saveButton = document.createElement("button");
    
            // create saveButton
            saveButton.innerHTML = "Save";
            saveButton.classList.add("save-button");
    
            // create editInput
            editInput.classList.add("edit-input");
            editInput.value = newTodo.innerText.split("Delete")[0]; // ["content", "Edit"]
            newTodo.innerHTML = "";
            newTodo.appendChild(editInput);
            newTodo.appendChild(saveButton);
    
            // saveButton event
            saveButton.addEventListener("click", () => {
                if(editInput.value != "") {
                    let isAccept = confirm(valueOfNewTodo + " will change to " + editInput.value + ", are you sure ?");
                    if(isAccept) {
                        newTodo.innerHTML = "";
                        newTodo.appendChild(isCompleted);
                        newTodo.appendChild(document.createTextNode(editInput.value));
                        newTodo.appendChild(deleteButton);
                        newTodo.appendChild(editButton);
                    } else {
                        console.log('stay');
                    }
                } else {
                    alert("Please input something.");
                }
            })

            editInput.addEventListener("keyup", (e) => {
                if(e.key === "Enter"){
                    saveButton.click();
                }
            })
        })

        // create delete button
        deleteButton.innerHTML = "Delete"
        deleteButton.classList.add("delete-button");
        
        // set deleteButton event
        deleteButton.addEventListener("click", () => {
            let isAccept = confirm(valueOfNewTodo + " will deleted, are you sure ?");
    
            if(isAccept){
                newTodo.remove();
                deleteButton.remove();
            }else{
                console.log("Sorry");
            }
        });
        
    }
})