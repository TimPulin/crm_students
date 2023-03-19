
function renderHeader() {
  const containerApp = document.getElementById('app');
  const header = createHeader();

  containerApp.append(header.header);

  renderLogo(header.wrapHeader)
  renderSearch(header.wrapHeader);
}

function renderLogo(header) {
  const logo = createLogo();
  header.append(logo);
}

function renderSearch(header) {
  const search = createSearch();
  const input = search.input;
  let timerId;
  header.append(search.blockSearch);

  input.addEventListener('input', (e) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      let eventSearchClients = new CustomEvent('searchClients', {
        bubbles: true,
      });

      input.dispatchEvent(eventSearchClients);

    }, 300)
  })
}
