import _ from 'lodash';
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
  new Task(3, 'Learn Redux', false),]

newFunction();

function newFunction() {
  const todosUL = document.querySelector('.todos');

  document.addEventListener('DOMContentLoaded',
    todosUL.innerHTML = `
    <li class="todoEl">
    <div>
    <input class="checker" value=${Element.completed} type="checkbox"/>
    <label>
    ${Element.description}
    </label>
    </div>
    <button class="positioner" type="button">
    <i class="fas fa-trash-alt" id=${Element.id}></i>
    </button>
    </li>`,
    todosUL.appendChild(Task));
}


