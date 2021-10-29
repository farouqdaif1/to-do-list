// to get the data from local storage
export default function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}
// Add task to local storage
export function addTask(data) {
  const sortedTasks = getTasks();
  sortedTasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(sortedTasks));
}
export function clear() {
  document.querySelector('#add-item').value = '';
}

// to creat object
let index = 0;
export function creatObj(descraption) {
  const obj = {};
  obj.completed = false;
  obj.description = descraption;
  index += 1;
  obj.index = index;
  return obj;
}