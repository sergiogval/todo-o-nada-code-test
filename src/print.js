import _ from 'lodash';
import { input, todosUL } from './index.js';

export default function addTodo(todo) {
  let todoText = input.value
  if (todo) {
      todoText = todo.text
  }
  if (todoText) {
      let todoEl =  document.createElement('li')
      if (todo && todo.completed) {
          todoEl.classList.add('completed')
      }
      todoEl.innerText = todoText
      todosUL.innerHTML = `
      <li class="todoEl">
      <div>
      <input class="checker" value="true" type="checkbox"/>
      <label>
      ${ todoEl.textContent }
      </label>
      </div>
      <button class="positioner" type="button">
      <i class="fas fa-trash-alt"></i>
      </button>
      </li>`
      input.value = ''
  }
 
}