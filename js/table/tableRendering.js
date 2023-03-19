
function renderTable() {
  const container = document.getElementById('container-app');
  const tableElements = createTable();

  container.append(tableElements.table);

  renderTableHead(tableElements.thead);
} // renderTable

function renderTableHead(thead) {
  const tr = createTr();
  thead.append(tr);

  for (const elemFeatures of state.theadElemsFeatures) {
    renderThSort(tr, elemFeatures);
  }

  renderThSimple(tr, 'Контакты');
  renderThSimple(tr, 'Действия');
} // renderTableHead

function renderThSimple(tr, text) {
  const th = createTheadElems({text});
  tr.append(th);
}

function renderThSort(tr, elemFeatures) {
  const th = createTheadElems(elemFeatures);
  const sortBy = th.getAttribute('data-sort-by');
  const eventSortClients = new CustomEvent('sortClients', {bubbles: true})
  let isReverse = false;

  tr.append(th);

  th.addEventListener('click', () => {
    th.dispatchEvent(eventSortClients)
    isReverse = toggleReverse(isReverse);

    sortClients(sortBy, isReverse);
    renderListClients();
  })

  document.addEventListener('sortClients', (e) => {
    manageClassReverse(th, e, isReverse);
    manageClassActive(th, e);
  })
} // renderTableHeadElems

function sortClients(sortBy = 'id', isReverse = false) {
  state.clients.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  if (isReverse) {
    state.clients.reverse();
  }
}

function toggleReverse(isReverse) {
  return isReverse ? false : true;
}

function manageClassActive(th, e) {
    if (th === e.target) {
    e.target.classList.add('btn-sort--active')
  } else {
    th.classList.remove('btn-sort--active');

  }
}

function manageClassReverse(th, e, isReverse) {
  if (th === e.target) {
    if (isReverse) {
      th.classList.add('btn-sort--reverse');
    } else {
      th.classList.remove('btn-sort--reverse');
    }
  } else {
    th.classList.remove('btn-sort--reverse');
  }
}


