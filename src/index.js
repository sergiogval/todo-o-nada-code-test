import './style.css';
import { addTodo, removeTodo, completeTodo } from './modules/addTodo';
import todo from './modules/todo';

const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const todos = JSON.parse(localStorage.getItem('todo'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(todo);
  localStorage.setItem('todos', JSON.stringify(todo));
});

function init() {
  if (todos) {
    addTodo(todo);
  }
  checkbox.addEventListener('change', removeTodo);
  checkbox.addEventListener('change', completeTodo);
}

init();
