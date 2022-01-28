import _ from 'lodash';

export default class TodoElClass {
  constructor(el) {
    this.el = el;
    this.el.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.el.classList.toggle('completed');
  }
}