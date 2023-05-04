import './style.css';

function display(task, ind) {
  const ulListTask = document.getElementById('list-task');
  const liTask = document.createElement('li');
  liTask.classList.add('task');
  liTask.id = task[ind - 1].index;

  const divTaskContent = document.createElement('div');
  divTaskContent.classList.add('align-center', 'task-content');
  const checkBok = document.createElement('input');
  checkBok.type = 'checkbox';
  checkBok.name = task[ind - 1].index;

  const inTaskDescription = document.createElement('input');
  inTaskDescription.classList.add('task-description');
  inTaskDescription.value = task[ind - 1].description;
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
      iMenu.classList.remove('hidden');
      iDelete.classList.add('hidden');
    }, 200);
  });

  divTaskContent.append(checkBok);
  divTaskContent.append(inTaskDescription);

  const iMenu = document.createElement('i');
  iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical');

  const iDelete = document.createElement('i');
  iDelete.classList.add('fa-solid', 'fa-trash', 'hidden');
  iDelete.style.color = '#fff';
  iDelete.addEventListener('click', (event) => {
    const { id } = event.currentTarget.parentElement;
    this.delete(id);
  });

  liTask.append(divTaskContent);
  liTask.append(iDelete);
  liTask.append(iMenu);

  ulListTask.append(liTask);
}

/* On submit the input */
const task = [];
const form = document.forms[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.newtask.value.trim().length !== 0) {
    const item = { description: form.newtask.value, completed: false, index: task.length + 1 };
    task.push(item);
    display(task, item.index);
  }
  form.newtask.value = '';
});

/*
 Save changes in Local Storage
window.addEventListener('beforeunload', () => {
  const savedData = { currentDescription: form.newtask.value, list: listTask.list };
  window.localStorage.setItem('SavedData', JSON.stringify(savedData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(window.localStorage.getItem('SavedData'));

  if (savedData.currentDescription != null) {
    form.newtask.value = savedData.currentDescription;
  }
  if (savedData.list != null) {
    for(let i = 0; i<task.length;i+=1){
      let item = {'description':task.description, 'completed':task.completed, 'index':task.index};
      task.push(item);
      display(task);
    };
  }
}) */
