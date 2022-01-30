import './style.css';
import addTodo from './modules/addTodo';
import Task from './modules/Task';

const form = document.getElementById('form');
const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.querySelector('.clear-btn');
const todosUL = document.getElementById('todos');
const todoEl = document.querySelector('.todo-el');
let todosEl = JSON.parse(localStorage.getItem('todos'));
const checkBox = document.querySelectorAll('.checkbox');
const refresh = document.querySelector('.fa-refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(new Task());
});

enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo(new Task());
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (todosUL.childNodes.length > 0) {
    todosUL.innerHTML = '';
    localStorage.clear();
  }
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  if (todosUL.childNodes.length > 0) {
    todosUL.innerHTML = '';
    localStorage.clear();
  }
});

todosEl = {};
if (todosEl !== null) {
  Array.forEach((element) => {
    addTodo(element);
  });
}

function completeTodo() {
  if (checkBox.onchange) {
    todoEl.classList.toggle('completed');
  }
}

Array.from(checkBox).forEach((checkbox) => {
  checkbox.addEventListener('change', completeTodo);
});

completeTodo();
