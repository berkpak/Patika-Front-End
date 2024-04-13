const getInput = document.querySelector('#task');
const ul = document.querySelector('#list');

function newElement() {
  let li = document.createElement('li');
  li.innerHTML = getInput.value;
  ul.appendChild(li);
  const span = document.createElement('span');
  span.className = 'close';
  span.innerHTML = '\u00d7';
  li.appendChild(span);

  getInput.value = '';
  saveToLocalStorage();
}

ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveToLocalStorage();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  localStorage.setItem('data', ul.innerHTML);
}

function showList() {
  ul.innerHTML = localStorage.getItem('data');
}
showList();
