import _ from 'lodash';
import './style.css';
import addTodo from './print.js';

const form = document.getElementById('form')
export const input = document.getElementById('add')
export const todosUL = document.getElementById('todos')

form.addEventListener('submit',(e) => {
  e.preventDefault()
  addTodo();
})