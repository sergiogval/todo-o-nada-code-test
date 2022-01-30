import Task from './Task';

const input = document.getElementById('add-todo');
const todosUL = document.getElementById('todos');
const checkbox = document.querySelectorAll('.checkbox');
const todoEl = document.querySelector('.todo-el');
// const trash = document.getElementsByClassName('fa-trash-alt');

const todo = new Task();

export function addTodo() {
  const todoText = input.value;
  const todoEl = document.createElement('li');
  todo.description = todoText;
  todo.completed = checkbox.value;
  todoEl.setAttribute('id', todosUL.childNodes.length);
  todoEl.setAttribute('class', 'todo-el');
  todoEl.innerHTML = `
    <div>
    <input type="checkbox" tabindex="0" class="checkbox" value="${todo.completed}"/>
    <label for="checkbox"><span class="todo-text">${todo.description}</span></label>
    </div>
    <button class="positioner" >
    <i tabindex="0" class="fa fa-trash-alt"></i>
    </button> `;
  todosUL.appendChild(todoEl);
  const todos = [{}];
  localStorage.setItem(todos, (JSON.stringify([`${todoEl.id}`, `${todo.description}`, `${checkbox.value}`])));
  input.value = '';
}

export function removeTodo(trash) {
  if (checkbox.checked) {
    trash.parentNode.parentNode.remove();
  }
}

export function completeTodo() {
  if (checkbox.checked) {
    todoEl.classList.toggle('completed');
  }
}

Array.from(checkbox).forEach((checkbox) => {
  checkbox.addEventListener('change', completeTodo);
  checkbox.addEventListener('change', removeTodo);
});
