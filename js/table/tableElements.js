
function createTable() {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  table.classList.add('table');
  tbody.classList.add('tbody', 'table__tbody');
  tbody.setAttribute('id', 'clientsTableBody')

  table.append(thead);
  table.append(tbody);

  return {
    table,
    thead,
    tbody,
  }
}

function createTr() {
  const tr = document.createElement('tr');
  tr.classList.add('table__tr')
  return tr;
}

function createTd(elementClass = []) {
  const td = document.createElement('td');
  td.classList.add('table__td');
  addClass(td, elementClass);
  return td;
}

function createTheadElems(
  {
    text: text,
    class: classArr = [],
    valueSortBy: sortBy = '',
    isIconArrow: isArrow = false,
    isIconLetters: isLetters = false,
  }) {

  const th = document.createElement('th');
  const iconArrow = createIconArrow();
  const iconLetters = createIconLetters();

  th.classList.add('table__th');

  for (let i = 0; i < classArr.length; i++) {
    th.classList.add(classArr[i]);
  }

  th.setAttribute('data-sort-by', sortBy);
  th.textContent = text;

  if (isLetters) {
    th.append(iconLetters);
  }

  if (isArrow) {
    th.append(iconArrow)
  }

  return th;
} // createTheadElems


