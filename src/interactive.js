import getTasks from './functions.js';

export default function statueUdpdateLS(e) {
  const tasx = e.target;
  const data = getTasks();
  data.forEach((element, i) => {
    if (tasx.id === `item${data[i].index}`) {
      if (tasx.checked) {
        data[i].completed = true;
        localStorage.setItem('tasks', JSON.stringify(data));
      } else {
        data[i].completed = false;
        localStorage.setItem('tasks', JSON.stringify(data));
      }
    }
  });
}

export function statueUdpdateUI(task) {
  const data = getTasks();
  data.forEach((element) => {
    if (task.id === `item${element.index}`) {
      if (element.completed) {
        const label = task.parentElement.id;
        document.querySelector(`#${label}`).style.textDecoration = 'line-through';
        document.querySelector(`#${task.id}`).checked = true;
      } else {
        const label = task.parentElement.id;
        document.querySelector(`#${label}`).style.textDecoration = 'none';
        document.querySelector(`#${task.id}`).checked = false;
      }
    }
  });
}