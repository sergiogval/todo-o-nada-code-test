import Task from './Task';
import '../style.css';
import _ from 'lodash';

const input = document.getElementById('add-todo');
const {
  appendChild,
  childNodes: { length },
  clear
} = document.getElementById('todos');
const trash = document.getElementsByClassName('positioner');
const checkBox = document.querySelectorAll('.checkbox');
const todosUL = document.getElementById('todos');



const todo = new Task();

export default function addTodo() {
  const todoText = input.value;
  const todoEl = document.createElement('li');
  todo.description = todoText;
  todo.completed = checkBox.value;
  todoEl.setAttribute('id', length);
  todoEl.setAttribute('class', 'todo-el');
  todoEl.innerHTML = `
    <div>
    <input 
    type="checkbox" 
    tabindex="0" 
    class="checkbox" 
    value="${todo.completed}"/>
    <label for="checkbox">
    <span class="todo-text">${todo.description}</span>
    </label>
    </div>
    <button type="reset" class="positioner" >
    <i tabindex="0" class="fa fa-trash-alt"></i>
    </button> `;
  todosUL.appendChild(todoEl);
  input.value = '';
  localStorage.setItem(('todos'), JSON.stringify({id, description, completed } = todo))
  trash.onclick('reset',
    clear(todo.constructor))};
