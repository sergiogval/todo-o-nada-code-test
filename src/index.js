import './style.css';
import addTodo from './modules/addTodo';

const form = document.getElementById('form');
const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.querySelector('.clear-btn');
const todosUL = document.getElementById('todos');
const todoEl = document.querySelector('.todo-el');
const checkBox = document.querySelectorAll('.checkbox');
const refresh = document.querySelector('.fa-refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(todoEl);
});

enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
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

function completeTodo() {
  if (checkBox.onchange) {
    todoEl.classList.toggle('completed');
  }
}

Array.from(checkBox).forEach((checkbox) => {
  checkbox.addEventListener('change', completeTodo);
});

completeTodo();
const todos = localStorage.getItem(JSON.parse('todos'));
if (todos) {
  Array.forEach(todoEl, addTodo(todoEl));
}