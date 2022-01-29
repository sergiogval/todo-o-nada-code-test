import './style.css';
import { addTodo, init } from './modules/addTodo';
import todo from './modules/todo';


const form = document.getElementById('form');
const checkbox = document.querySelector('.checkbox');
const enterBtn = document.getElementById('enterBtn');
// enterBtn.addEventListener('click', addTodo); //! This will work if the function addTodo includes all subsequents
// const todos = JSON.parse(localStorage.getItem('todo'));
const clearBtn = document.querySelector('.clear-btn');
const todoEl = document.querySelector('todo-el');
const todosUL = document.getElementById('todos');
const trash = document.querySelector('.positioner');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(todo);
 });

enterBtn.addEventListener('click', (e) => { //!nice to have: keypress enter
  e.preventDefault();
  addTodo(todo);
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (todosUL.childNodes.length > 0) {
  todosUL.innerHTML = '';
}});