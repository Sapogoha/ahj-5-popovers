import Popover from './Popover';

const button = document.querySelector('.popover-button');
const parent = document.querySelector('.container');
const title = 'Popover Title';
const text = 'Popover text';
const popover = new Popover(parent, title, text);

button.addEventListener('click', () => {
  popover.init();
});
