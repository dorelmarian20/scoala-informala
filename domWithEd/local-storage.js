// Local Storage

// localStorage.setItem('todo', 'feed the cat');
// localStorage.setItem('user', 'Dorel');
// localStorage.setItem('todo', 'feed the cat');

// Session storage

// sessionStorage.setItem('todoList', 'session feeding cat');

//Getting stuff back
// const user = localStorage.getItem('user');

const todoList = ['feed the cat', 'wash', ' listen to some classical music'];

localStorage.setItem('todos', JSON.stringify(todoList));

// const retrieved = localStorage.getItem('todos');