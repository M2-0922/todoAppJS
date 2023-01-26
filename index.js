window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todo-list");
    let searchInput = document.getElementById("todo-search");

    inputData.addEventListener("keyup", (event) => {
        console.log(event);
        if (event.key === "Enter") {
            addButton.click();
        }
    })

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        let deleteButton = document.createElement("button");
        let editButton = document.createElement("button");
        let isCompleted = document.createElement("input");

        // Checkbox
        isCompleted.type = "checkbox";;
        isCompleted.setAttribute("id", "todo-checkbox");

        // delete button
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("id", "todo-delete");

        // edit button
        editButton.innerText = "Edit";
        editButton.setAttribute("id", "todo-edit");

        // newTodo
        newTodo.innerHTML = inputData.value;
        newTodo.appendChild(editButton);
        newTodo.appendChild(deleteButton);
        newTodo.insertBefore(isCompleted, newTodo.childNodes[0]);

        // todoList.appendChild(deleteButton);
        todoList.appendChild(newTodo);

        inputData.value = "";

        deleteButton.addEventListener("click", () => {
            let isAccept = confirm("Are you sure you wanna delete " + newTodo.innerText + "?");

            if (isAccept) {
                newTodo.remove();
                deleteButton.remove();
            } else {
                alert("Deleting failed.");
            }
        })

        editButton.addEventListener("click", () => {
            let editInput = document.createElement("input");
            let saveButton = document.createElement("button");

            // saveButton
            saveButton.innerText = "Save";
            saveButton.setAttribute("id", "todo-save");

            // editInput
            editInput.setAttribute("id", "edit-input");

            newTodo.innerHTML = "";
            newTodo.appendChild(editInput);
            newTodo.appendChild(saveButton);

            saveButton.addEventListener("click", () => {
                newTodo.innerHTML = "";
                newTodo.appendChild(isCompleted);

                newTodo.appendChild(document.createTextNode(editInput.value));
                newTodo.appendChild(deleteButton);
                newTodo.appendChild(editButton);
            })

            editInput.addEventListener("keyup", (e) => {
                if (e.key === "Enter") {
                    saveButton.click();
                }
            })
        })
    })

    searchInput.addEventListener("keyup", (event) => {
        let searchData = searchInput.value;
        let todos = Array.from(todoList.children);

        todos.forEach((todo) => {
            if (todo.innerText.includes(searchData)) {
                todo.style.display = "block";
            } else {
                todo.style.display = "none";
            }
        })

    })
})