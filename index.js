window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todos-list");
    let searchInput = document.getElementById("todo-search");
    

  

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        newTodo.innerHTML = inputData.value;
        
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete"
        deleteButton.classList.add("delete-button");

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.classList.add("checkBox");

        todoList.appendChild(newTodo);
        newTodo.appendChild(checkBox);
       
        newTodo.appendChild(deleteButton);
        
        inputData.value = "";

        deleteButton.addEventListener("click", () => {
            alert("Do you really want to delete it?");
            newTodo.remove();
            deleteButton.remove();
        });


    })



    searchInput.addEventListener("keyup", () => {

        let searchData = searchInput.value;

        let todos = Array.from(todoList.children);

        todos.forEach((e) => {
            if(e.innerText.includes(searchData)){
                e.style.display = "block";
            }else{
                e.style.display = "none";
            }
        })

        for(let i = 0; i < todos.length; i++){
            if(todos[i].innerText.includes(searchData)){
                todos[i].style.display = "block";
            }else{
                todos[i].style.display = "none";
            }
        }
    })

    function checkFunction(){
        let checkBox = document.getElementById("myCheck");
        let text = document.getElementById("text");
        if (checkBox.checked == true){
            inputData.style.display = "block";
        } else {
            inputData.style.display = "none";
        }
      }
})