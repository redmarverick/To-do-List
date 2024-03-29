import './style.css';
import ListTasks from './modules/ListTasks.js';

let savedData;

function saveData(dataValue, dataList) {
  savedData = { currentDescription: dataValue, list: dataList };
  localStorage.setItem('SavedData', JSON.stringify(savedData));
}

function loadData() {
  const savedData = JSON.parse(localStorage.getItem('SavedData'));
  if (savedData.currentDescription != null) {
    form.newtask.value = savedData.currentDescription;
  }
  if (savedData.list != null) {
    savedData.list.forEach((task) => {
      listTask.add(task.description, task.completed, task.index);
    });
  }
}

export const listTask = new ListTasks();
const form = document.forms[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.newtask.value.trim().length !== 0) {
    listTask.add(form.newtask.value);
  }
  form.newtask.value = '';
  saveData(form.newtask.value, listTask.list);
});

const btnClearAll = document.getElementById('btn-clear-task');
btnClearAll.addEventListener('click', () => {
  listTask.clearAll();
});

window.addEventListener('beforeunload', () => {
  saveData(form.newtask.value, listTask.list);
});

window.addEventListener('load', () => {
  loadData();
});

export { saveData };
