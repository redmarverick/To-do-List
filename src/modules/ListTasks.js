import Task from './Task.js';
import { saveData } from '../index.js';

const form = document.forms[0];

export default class ListTasks {
  constructor() {
    this.list = [];

    this.dragStartID = -1;
    this.dragEndID = -1;
  }

  add = (description, completed = false, index = this.list.length + 1) => {
    const task = new Task(description, completed, index);
    this.list.push(task);
    this.display(task);
  }

  display = (task) => {
    const ulListTask = document.getElementById('list-task');
    const liTask = document.createElement('li');
    liTask.classList.add('task');
    liTask.id = task.index;

    const divTaskContent = document.createElement('div');
    divTaskContent.classList.add('align-center', 'task-content');
    const checkBok = document.createElement('input');
    checkBok.type = 'checkbox';
    checkBok.name = task.index;

    const inTaskDescription = document.createElement('input');
    inTaskDescription.classList.add('task-description');
    inTaskDescription.value = task.description;
    inTaskDescription.type = 'text';

    checkBok.addEventListener('change', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      if (event.currentTarget.checked) {
        event.currentTarget.nextSibling.style.textDecoration = 'line-through';
        this.list[id - 1].completed = true;
      } else {
        event.currentTarget.nextSibling.style.textDecoration = 'none';
        this.list[id - 1].completed = false;
      }
      saveData(form.newtask.value, this.list);
    });

    if (task.completed) {
      checkBok.click();
      inTaskDescription.style.textDecoration = 'line-through';
    }

    inTaskDescription.addEventListener('focus', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      document.getElementById(id).style.backgroundColor = 'rgb(156, 156, 255)';
      const iDelete = event.currentTarget.parentElement.nextSibling;
      const iMenu = event.currentTarget.parentElement.nextSibling.nextSibling;
      iDelete.classList.remove('hidden');
      iMenu.classList.add('hidden');
    });

    inTaskDescription.addEventListener('focusout', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      const litask = document.getElementById(id);
      litask.style.backgroundColor = 'white';

      this.list[id - 1].description = event.currentTarget.value;
      const iDelete = event.currentTarget.parentElement.nextSibling;
      const iMenu = event.currentTarget.parentElement.nextSibling.nextSibling;

      setTimeout(() => {
        deleteHid();
      }, 200);
    });

    divTaskContent.append(checkBok);
    divTaskContent.append(inTaskDescription);

    const iMenu = document.createElement('i');
    iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical');
    iMenu.setAttribute = ('onclick', 'deleteHid()');

    const iDelete = document.createElement('i');
    iDelete.classList.add('fa-solid', 'fa-trash', 'hidden');
    iDelete.style.color = '#fff';
    iDelete.setAttribute = ('onclick', 'deleteHid()');
    iMenu.addEventListener('click', (event) => {
      deleteHid();
      iDelete.style.color = '#c1c1c1';
    });
    iDelete.addEventListener('click', (event) => {
      const { id } = event.currentTarget.parentElement;
      this.delete(id);
    });

    liTask.append(divTaskContent);
    liTask.append(iDelete);
    liTask.append(iMenu);

    function deleteHid() {
      iMenu.classList.toggle('hidden');
      iDelete.classList.toggle('hidden');
    }

    this.addEventsDragAndDrop(liTask);

    ulListTask.append(liTask);
  }

  delete = (idDeleted) => {
    this.list = this.list.filter((task) => task.index !== this.list[idDeleted - 1].index);
    document.getElementById(idDeleted).remove();
    this.updateIndexs();
    saveData(form.newtask.value, this.list);
  }

  updateIndexs = () => {
    let index = 1;
    this.list.forEach((task) => {
      const liTask = document.getElementById(task.index);
      liTask.id = index;

      task.index = index;
      index += 1;
    });
    saveData(form.newtask.value, this.list);
  }

  clearAll = () => {
    this.list.forEach((task) => {
      if (task.completed) {
        document.getElementById(task.index).remove();
      }
    });
    this.list = this.list.filter((task) => !task.completed);
    this.updateIndexs();
    saveData(form.newtask.value, this.list);
  }

  addEventsDragAndDrop = (element) => {
    element.draggable = 'true';
    element.addEventListener('dragstart', (event) => {
      this.dragStartID = event.currentTarget.id;
      event.currentTarget.style.backgroundColor = 'rgb(156, 156, 255)';
    }, false);
    element.addEventListener('dragend', () => {
      const dragedTask = this.list[Number(this.dragStartID) - 1];
      this.list = this.list.filter((task) => task.index !== dragedTask.index);
      this.list.splice(Number(this.dragEndID) - 1, 0, dragedTask);
      this.updateIndexs();
      const list = document.getElementById('list-task');
      list.innerHTML = '';
      this.list.forEach((task) => {
        this.display(task);
      });
      saveData(form.newtask.value, this.list);
    }, false);

    element.addEventListener('dragleave', (event) => {
      event.currentTarget.style.backgroundColor = '#fff';
      event.preventDefault();
    }, false);

    element.addEventListener('dragover', (event) => {
      event.currentTarget.style.backgroundColor = '#ebebeb';
      this.dragEndID = event.currentTarget.id;
      event.preventDefault();
    });
  }
}