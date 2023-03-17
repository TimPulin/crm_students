
function createTable() {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  table.classList.add('table');
  tbody.classList.add('tbody');
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
  return tr;
}

function createTheadElems(btnText, valueSortBy) {
  const th = document.createElement('th');
  const btn = document.createElement('button');

  th.classList.add('th');
  btn.classList.add('btn-reset', 'btn-sort');
  btn.textContent = btnText;
  btn.setAttribute('data-sort-by', valueSortBy);

  th.append(btn);

  return {
    th,
    btn,
  }
}
