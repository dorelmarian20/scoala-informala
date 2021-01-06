const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const ascBtn = document.querySelector('.ascendent')
const dscBtn = document.querySelector('.descendent');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
ascBtn.addEventListener('click', sortList);
dscBtn.addEventListener('click', dscList);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function sortList() {
    let list = document.getElementById('myList');

    let items = list.childNodes;
    let itemsArr = [];
    for (var i in items) {
        if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
            itemsArr.push(items[i]);
        }
    }

    itemsArr.sort(function (a, b) {
        return a.innerHTML == b.innerHTML
            ? 0
            : (a.innerHTML > b.innerHTML ? 1 : -1);
    });

    for (i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
    }
}

function dscList(){
    let list = document.getElementById('myList');

    let items = list.childNodes;
    let itemsArr = [];
    for (var i in items) {
        if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
            itemsArr.push(items[i]);
        }
    }

    itemsArr.sort(function (a, b) {
        return a.innerHTML == b.innerHTML
            ? 0
            : (a.innerHTML > b.innerHTML ? 1 : -1);
    });

    for (i = itemsArr.length -1; i >= 0; i--) {
        list.appendChild(itemsArr[i]);
    }
}

