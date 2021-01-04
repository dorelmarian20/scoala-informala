const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
let listItems = [];

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);


//To add back and investigate e parameter
function addTodo(e) {
 

 e.preventDefault();
  
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  listItems.push(todoInput.value);
  

  saveLocalTodos(todoInput.value);
  //Save a local copy of the array?
  localStorage.setItem("arrayStorage", listItems)
  
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  listItems.forEach(element => console.log(element));
  
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    
    const todo = item.parentElement;
    //Add it in sort? consistency?
    todo.classList.add("fall");
    
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
      console.log(todo.value);
      listItems = localStorage.getItem("arrayStorage");
      listItems.pop(todo.value);
      localStorage.setItem("arrayStorage", listItems)

      listItems.forEach(element => console.log(element));
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "ascendent":
        ascendentSort();
        

      break;

      case "descendent":
        descendent();
      break;
        
      // break;
      // case "completed":
      //   if (todo.classList.contains("completed")) {
      //     todo.style.display = "flex";
      //   } else {
      //     todo.style.display = "none";
      //   }
      //   break;
      // case "uncompleted":
      //   if (!todo.classList.contains("completed")) {
      //     todo.style.display = "flex";
      //   } else {
      //     todo.style.display = "none";
      //   }
    }
  });
}

  //Emil, Ana, Zerg
    //Ana, Emil, Zerg

  // 1 Remove all elmenets from the page based on array length
  // 2 Add/ Create new elements based on the new array items value

function ascendentSort(){
  domTodosRemoval();
 
  //Sorting & Adding the newly sorted Element List to the dom
  listItems.sort();
  console.log(listItems);
  
  for(i = 0; i < listItems.length; i++){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newTodo = document.createElement("li");
    newTodo.innerText = listItems[i];
  
    //saveLocalTodos(listItems[i]);
    //Save a local copy of the array?
    
    
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
  
    listItems.forEach(element => console.log(element));
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);
  }
  
}

function descendentSort(){

}
   
function domTodosRemoval(){
  let item = document.getElementsByClassName("todo");
  
  //Removing the ElementList from the DOM
  for (var i = item.length - 1; i >= 0; --i) {
    item[i].remove();
  }
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ********** 
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
//************ */

function saveLocalListArray(todo) {
 
}


function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);
  });
}

