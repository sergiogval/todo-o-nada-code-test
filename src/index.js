import { Element } from 'domhandler';
import './style.css';

class Task {
  constructor(id, description, completed) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}

const tasks = [
  new Task(1, 'Learn JavaScript', false),
  new Task(2, 'Learn React', false),
  new Task(3, 'Learn Redux', false)];


  const todosUL = document.querySelector('.todos');

document.addEventListener('DOMContentLoaded', () => {
  tasks.forEach((elem) => {
  todosUL.innerHTML = `
  <li class="todo-el">
  <div>
  <input class="checker" value=${elem.completed} type="checkbox"/>
  <label>
  ${elem.description}
  </label>
  </div>
  <button class="positioner" type="button">
  <i class="fas fa-trash-alt" id=${elem.id}></i>
  </button>
  </li>`,
  todosUL.appendChild(Task)
});
});

