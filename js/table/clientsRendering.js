function renderListClients() {
  resetTable();
  for (let client of state.clients) {
    renderClient(client)
  }
}


function renderClient(client) {
  const tbody = document.getElementById('clientsTableBody');
  const tr = createTr();
  tbody.append(tr);
  renderCleintId(client.id, tr);
  renderClientFio(client.fio, tr)
  renderDate(client.createdAtDate, client.createdAtTime, tr);
  renderDate(client.updatedAtDate, client.updatedAtTime, tr);
  renderListContacts(client.contacts, tr);
  renderButtonMangeContact(client.id, tr);
}

function renderCleintId(id, tr) {
  const td = createTd();
  const span = createSpan(['faded']);
  span.textContent = id;
  td.append(span);
  tr.append(td);
}

function renderClientFio(name, tr) {
  const td = createTd();
  td.textContent = name;
  tr.append(td);
}

function renderDate(date, time, tr) {
  const td = createTd();
  const span = createSpan(['faded']);

  td.textContent = date;
  span.textContent = time;

  td.append(span);
  tr.append(td);
}

function renderListContacts(contacts, tr) {
  const td = createTd(['table__td--contacts']);
  const contactWrap = createDiv(['icon-contact-wrap']);

  td.append(contactWrap);
  tr.append(td);

  for (let contact of contacts) {
    renderContact(contact, contactWrap);
  }
}

function renderContact(contact, contactWrap) {
  const button = createButton(['icon-contact']);

  button.setAttribute('data-bs-toggle', 'tooltip');
  button.setAttribute('title', contact.value);
  button.insertAdjacentHTML('afterbegin', iconsContact[contact.type]);

  contactWrap.append(button);
}

function renderButtonMangeContact(id, tr) {
  const td = createTd();
  const buttonEdit = createButton(['btn-manage-contact', 'btn-manage-contact--change'], 'Изменить');
  const buttonDel = createButton(['btn-manage-contact', 'btn-manage-contact--del'], 'Удалить');

  td.append(buttonEdit);
  td.append(buttonDel);
  tr.append(td);
}

function resetTable() {
  const tbody = document.getElementById('clientsTableBody');
  tbody.innerHTML = '';
}
