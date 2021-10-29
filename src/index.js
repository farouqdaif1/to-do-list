import './style.css';
import getTasks, { addTask } from './functions.js';
import statueUdpdateLS, { statueUdpdateUI } from './interactive.js';

const tasks = [
  { description: 'wash the dashes', completed: false, index: 0 },
  { description: 'complete to do ', completed: false, index: 1 },
  { description: 'wash the dashes', completed: false, index: 2 },
];
const sorteddata = getTasks();
const addItem = (task) => {
  const list = document.querySelector('.list');
  const div = document.createElement('div');
  div.classList.add('mystyle');
  div.innerHTML += '';
  div.innerHTML = `
    <div class="input" id="box${task.index}" >
    <input type="checkbox" id="item${task.index}" class="check"  name="item${task.index}" >
    <label for="item${task.index}">${task.description}</label >
    </div>
    <span  class="material-icons">
    more_vert
    </span>`;
  list.appendChild(div);
  if (task.completed) {
    document.querySelector(`#item${task.index}`).checked = true;
    document.querySelector(`#item${task.index}`).parentElement.classList.add('complete');
  } else {
    document.querySelector(`#item${task.index}`).parentElement.classList.remove('complete');
    document.querySelector(`#item${task.index}`).checked = false;
  }
};

function display() {
  if (sorteddata.length === 0) {
    tasks.forEach((task) => {
      addItem(task);
      addTask(task);
    });
  } else {
    sorteddata.forEach((x) => {
      addItem(x);
    });
  }
}

// window.addEventListener('DOMContentLoaded', () => {
//   if (getTasks().length === 0) {
//     addTask(tasks[0]);
//     addTask(tasks[1]);
//     addTask(tasks[2]);
//   }
// });
const checkbox = document.querySelector('.list');
checkbox.addEventListener('change', (e) => {
  const task = document.querySelector(`#${e.target.id}`);
  statueUdpdateLS(e);
  statueUdpdateUI(task);
});
display();
