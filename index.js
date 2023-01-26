window.addEventListener("load", () => {
	let inputData = document.getElementById("todo-input");
	let addButton = document.getElementById("todo-add");
	let todoList = document.getElementById("todos-list");
	let searchInput = document.getElementById("todo-search");

	addButton.addEventListener("click", () => {
		let newTodo = document.createElement("li");
		let checkbox = document.createElement("input");
		let deleteButton = document.createElement("button");

		checkbox.setAttribute("type", "checkbox");
		newTodo.appendChild(checkbox);
		newTodo.innerHTML += inputData.value;
		deleteButton.innerText = "Delete";
		newTodo.appendChild(deleteButton);

		todoList.appendChild(newTodo);

		deleteButton.addEventListener("click", () => {
			newTodo.remove();
		});

		inputData.value = "";
	});

	searchInput.addEventListener("keyup", () => {
		let searchData = searchInput.value;
		let todos = Array.from(todoList.children);

		for (let i = 0; i < todos.length; i++) {
			if (todos[i].innerText.includes(searchData)) {
				todos[i].style.display = "block";
			} else {
				todos[i].style.display = "none";
			}
		}
	});
});

// window.addEventListener("load", () => {
// 	let inputData = document.getElementById("todo-input");
// 	let addButton = document.getElementById("todo-add");
// 	let todoList = document.getElementById("todos-list");
// 	let searchInput = document.getElementById("todo-search");

// 	addButton.addEventListener("click", () => {
// 		let newTodo = document.createElement("li");
// 		let checkbox = document.createElement("input");
// 		let deleteButton = document.createElement("button");

// 		checkbox.setAttribute("type", "checkbox");
// 		newTodo.appendChild(checkbox);
// 		newTodo.innerHTML += inputData.value;
// 		deleteButton.innerText = "Delete";
// 		newTodo.appendChild(deleteButton);

// 		todoList.appendChild(newTodo);

// 		deleteButton.addEventListener("click", () => {
// 			newTodo.remove();
// 		});

// 		inputData.value = "";
// 	});

// 	searchInput.addEventListener("keyup", () => {
// 		let searchData = searchInput.value;
// 		let todos = Array.from(todoList.children);

// 		for (let i = 0; i < todos.length; i++) {
// 			if (todos[i].innerText.includes(searchData)) {
// 				todos[i].style.display = "block";
// 			} else {
// 				todos[i].style.display = "none";
// 			}
// 		}
// 	});
// });
