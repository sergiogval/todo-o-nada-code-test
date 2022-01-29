import './style.css';
import { addTodo, removeTodo, completeTodo } from './modules/addTodo';
import todo from './modules/todo';

const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const enterBtn = document.getElementById('enterBtn');
const todos = JSON.parse(localStorage.getItem('todo'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(todo);
  Storage(todo);
});

enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo(todo);
  Storage(todo);
});

function init() {
  if (todos) {
    addTodo(todo);
  }
  checkbox.addEventListener('change', removeTodo);
  checkbox.addEventListener('change', completeTodo);
}

init();

class Storage {
  constructor() {
    this.todos = [];
    this.addTodo = function (todo) {
      this.todos.push(todo);
    };
    this.removeTodo = function (todo) {
      this.todos.splice(todo, 1);
    };
    this.completeTodo = function (todo) {
      this.todos[todo].completed = true;
    };
  }
}