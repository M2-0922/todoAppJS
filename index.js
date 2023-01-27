window.addEventListener("load", () => {

    // When we edit the todo, after that while we are deleting it shows the old text,
    // please find a way to change this text to new version of text

    // -> declare valueOfNewTodo in adding delete button eventlistener

    // please put validation for inputs, that you cannot add empty todo to the list.
    // also check while editing.

    // -> add input value check at the start of add button eventlistener and save button eventlistener.

    // please search: how we can hold the information in localStorage.
    // you can use stackoverflow, google search, etc.
    // please apply localStorage to todo Application

    // -> use localStorage.setItem and localStorage.getItem. save html contents in each list as string.
    // also save task number and checkbox value.

    // once you done with those questions, please create your own branch on top of bug-fix branch
    // branch name ex: bug-fix-kubilay
    // push them to repo

    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");

    inputData.addEventListener("keyup", (event) => {
        // console.log(event);
        if(event.key === "Enter"){
            addButton.click();
            // trigger the event
        }
    });

    // get item from local storage and set to the list, add delete button event listener and edit button event listener
    if (localStorage.length == 0) {
        localStorage.setItem('taskNumber', 1);
    }

    let listId = Object.keys(localStorage).filter(item => (/^\d+$/).test(item)).sort();

    for (item of listId) {
        let listItem = document.createElement('li');
        listItem.id = item;
        listItem.innerHTML = localStorage.getItem(item);
        todoList.appendChild(listItem);
        let deleteButton = listItem.childNodes[2];
        let editButton = listItem.childNodes[3];

        let isCompleted = listItem.childNodes[0];
        if (localStorage.getItem("check" + item) == 'true') {
            isCompleted.checked = true;
        };
        isCompleted.addEventListener('change', () => {
            localStorage.setItem("check" + listItem.id, isCompleted.checked);
        })

        deleteButton.addEventListener("click", () => {
            deleteItem(listItem);
        });

        editButton.addEventListener("click", () => {
            editItem(listItem);
        })
    }

    addButton.addEventListener("click", () => {
        if (inputData.value != "") {
            let newTodo = document.createElement("li");
            let taskNumber = localStorage.getItem('taskNumber');
            newTodo.id = taskNumber;
            let deleteButton = document.createElement("button");
            let isCompleted = document.createElement("input");
            let editButton = document.createElement("button");

            // EditButton
            editButton.innerHTML = "Edit";
            editButton.classList.add("edit-button");

            // Checkbox
            isCompleted.type = "checkbox";
            isCompleted.classList.add("todo-checkbox");
            isCompleted.addEventListener('change', () => {
                localStorage.setItem("check" + newTodo.id, isCompleted.checked);
            })

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

            // reset the input
            inputData.value = "";

            // set to localStorage
            localStorage.setItem(taskNumber, newTodo.innerHTML);
            localStorage.setItem("check" + newTodo.id, isCompleted.checked);
            localStorage.setItem('taskNumber', ++taskNumber);

            deleteButton.addEventListener("click", () => {
                deleteItem(newTodo);
            });

            editButton.addEventListener("click", () => {
                editItem(newTodo);
            })
        } else {
            alert('Todo name should be more than 1 character.');
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

    function deleteItem(item) {
        let itemValue = item.childNodes[1].nodeValue;
        let isAccept = confirm(itemValue + " will deleted, are you sure ?");
    
        if(isAccept){
            item.remove();
            // deleteButton.remove();
            localStorage.removeItem(item.id);
            localStorage.removeItem("check" + item.id);
        }else{
            console.log("Sorry");
        }
    }
    
    function editItem(item) {
        let editInput = document.createElement("input");
        let saveButton = document.createElement("button");
    
        // saveButton
        saveButton.innerHTML = "Save";
        saveButton.classList.add("save-button");
    
        // editInput 
        editInput.classList.add("edit-input");
        editInput.value = item.childNodes[1].nodeValue;
        // ["content", "Edit"]
    
        let isCompleted = item.childNodes[0];
        let currentValue = item.childNodes[1];
        let editButton = item.childNodes[2];
        let deleteButton = item.childNodes[3];
        item.innerHTML = "";
        item.appendChild(editInput);
        item.appendChild(saveButton);
    
        saveButton.addEventListener("click", () => {
    
            let textNode;
    
            if (editInput.value != "") {                      
                textNode = document.createTextNode(editInput.value);
            } else {
                alert('Todo name should be more than 1 character.');
                textNode = currentValue;
            }
    
            item.innerHTML = "";
            item.appendChild(isCompleted);
            item.appendChild(textNode);
            item.appendChild(deleteButton);
            item.appendChild(editButton);
            localStorage.setItem(item.id, item.innerHTML);
            localStorage.setItem("check" + item.id, isCompleted.checked);
        })
    
        editInput.addEventListener("keyup", (e) => {
            if(e.key === "Enter"){
                saveButton.click();
            }
        })
    }
})