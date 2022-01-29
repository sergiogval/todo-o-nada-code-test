import _ from 'lodash';
import todo from './todo';

const input = document.getElementById('add-todo');
const todosUL = document.getElementById('todos');
const clearBtn = document.querySelector('clear-btn');

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
  // todo.setAttribute('id', todosUL.childNodes.length);
  // todo.setAttribute('value', todo.completed);
  if ( input === null) {
    return
  } else {
    todoEl.innerHTML = `
  <li class="todo-el">
    <div>
      <input type="checkbox" tabindex="0" class="checkbox" >
      <label for="checkbox"><span class="todo-text">${todo.description}</span></label>
    </div>
    <button class="positioner" >
      <i tabindex="0" class="fa fa-trash-alt"></i>
    </button>
  </li>
  `;
  
  todosUL.appendChild(todoEl);
  if (input !== null) {
    input.value = ' ';
  }
}
}
