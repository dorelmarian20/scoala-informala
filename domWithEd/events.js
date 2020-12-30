const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const mainTitle = document.querySelector('.main-title');
const nameInput = document.querySelector('.name-input');

const items = todoList.children;

// //CLIOCK SCROLL RESIZING THE BROWSER

// // ATTACH A EVENT LISTENER
button.addEventListener('click', function(e) {
    e.preventDefault();
    //Creating the element
    const newItem = document.createElement('li');
    //Adding class
    newItem.classList.add('item');
    //Adding the text
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
    //Delete the value from the input
    nameInput.value = "";
    // create the element and attaching the listener
    newItem.addEventListener('click', deleteItem);
});


for (item of items) {
    item.addEventListener('click', deleteItem);
}

function deleteItem(e) {
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener('click', function () {
    todoList.classList.toggle('fade');
});



// button.addEventListener('keydown', function(event){
//    if(event.keyCode === 81){
//        mainTitle.classList.toggle('spectacular');
//    }
// });
