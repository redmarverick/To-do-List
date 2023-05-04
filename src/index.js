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
const task = [
  {
    description: 'Buying groceries',
    completed: 'false',
    index: 1,
  },
  {
    description: 'Pay electricity bill',
    completed: 'false',
    index: 2,
  },
  {
    description: 'Repair the stove',
    completed: 'false',
    index: 3,
  },
  {
    description: 'get a haircut',
    completed: 'false',
    index: 4,
  },
];

for (let i = 1; i <= task.length; i += 1) {
  display(task, i);
}