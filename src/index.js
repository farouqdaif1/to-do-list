import './style.css';

const tasks = [
  { description: 'wash the dashes', completed: false, index: 0 },
  { description: 'complete to do list project ', completed: false, index: 1 },
  { description: 'wash the dashes', completed: false, index: 2 },
];
const addItem = (task) => {
  const list = document.querySelector('.list');
  const div = document.createElement('div');
  div.classList.add('mystyle');
  div.innerHTML = `
    <div class="input">
    <input type="checkbox" class="check" id="item${task.index}" name="item${task.index}" >
    <label for="item${task.index}">${task.description}</label >
    </div>
    <span  class="material-icons">
    more_vert
    </span>`;
  list.appendChild(div);
};

const display = () => {
  tasks.forEach((task) => {
    addItem(task);
  });
};
display();
