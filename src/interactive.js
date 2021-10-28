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

export function statueUdpdateUI(e) {
  const tasx = e.target;
  if (tasx.checked) {
    const label = tasx.parentElement.id;
    document.querySelector(`#${label}`).style.textDecoration = 'line-through';
  } else {
    const label = tasx.parentElement.id;
    document.querySelector(`#${label}`).style.textDecoration = 'none';
  }
}
