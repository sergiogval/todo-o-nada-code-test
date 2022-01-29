import todo from './todo';

const input = document.getElementById('add-todo');
const todosUL = document.getElementById('todos');
export function removeTodo(e) {
  if (e.target.classList.contains('remove')) {
    const todo = e.target.parentElement;
    todo.parentElement.removeChild(todo);
  }
}

export function completeTodo(e) {
  if (e.target.classList.contains('checkbox')) {
    const todo = e.target.parentElement;
    todo.classList.toggle('completed');
  }
}

export function addTodo() {
  const todoText = input.value;
  todo.description = todoText;
  const todoEl = document.createElement('li');
  todoEl.setAttribute('id', todo.id);
  todoEl.setAttribute('class', todo.completed);
  todoEl.innerHTML = `
  <li class="todo-el">  
    <span>
      <input type="checkbox" class="checkbox ${todo.completed}">
      <label for="checkbox"><span class="todo-text">${todo.description}</span></label>
    </span>
    <span class="remove-todo" >
      <i class="fas fa-trash-alt" id="${todo.id}></i>
    </span>
  </li>
  `;
  // TODO: add event listener to remove todo
  // TODO: add event listener to complete todo
  // TODO: Add localstorage function
  // TODO: Add todo to localstorage
  // TODO: make trash can remove todo
  // TODO: make checkbox complete todo
  // TODO: add todo to list
  // TODO: add event listener to add todo
  // TODO: add trash can to list of todos (todo-el)
  // TODO: add checkbox to list of todos (todo-el)
  // TODO: add todo-text to list of todos (todo-el)
  // TODO: Get rid of undefined class on li element

  todosUL.appendChild(todoEl);
  localStorage.setItem('todos', JSON.stringify(this.id, this.description, this.completed));
}

function cleanInput() {
  if (addTodo) {
    input.value = '';
  }
}
cleanInput();
