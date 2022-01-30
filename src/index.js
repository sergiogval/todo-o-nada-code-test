import './style.css';
import { addTodo } from './modules/addTodo';
import Task  from './modules/Task';


const form = document.getElementById('form');
const enterBtn = document.getElementById('enterBtn');
// enterBtn.addEventListener('click', addTodo); //! This will work if the function addTodo includes all subsequents
const todos = JSON.parse(localStorage.getItem('todos'));
const clearBtn = document.querySelector('.clear-btn');
const todosUL = document.getElementById('todos');
const trash = document.getElementsByClassName('fa-trash-alt');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(new Task());
 });

enterBtn.addEventListener('click', (e) => { //!nice to have: keypress enter
  e.preventDefault();
  addTodo(new Task());
});

enterBtn.addEventListener('keyDown', (e) => {
  e.preventDefault();
  if (keyCode === 13 || keyCode === 32) {
    addTodo(new Task());
  }})

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (todosUL.childNodes.length > 0) {
  todosUL.innerHTML = '';
  localStorage._clear();
  }})

if (todosUL.childNodes.length > 0) {
  todos.forEach((todo) => {
    const todoEl = document.createElement('li');
    todoEl.setAttribute('id', todosUL.childNodes.length);
    todoEl.setAttribute('class', 'todo-el');
    todoEl.innerHTML = `
      <div>
      <input type="checkbox" tabindex="0" class="checkbox" value="${todo[2]}"/>
      <label for="checkbox"><span class="todo-text">${todo[1]}</span></label>
      </div>
      <button class="positioner" >
      <i tabindex="0" class="fa fa-trash-alt"></i>
      </button> `;
      todosUL.appendChild(todoEl);
  });
}
addTodo(todos);
