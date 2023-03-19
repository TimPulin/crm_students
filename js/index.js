(() => {

  document.addEventListener('DOMContentLoaded', async () => {
    state.clients = await getClientsFromServer();
    renderHeader();
    renderMain();
    renderTable();
    sortClients();
    renderListClients();
    renderFooter();
    tooltipInit();
  })

  document.addEventListener('searchClients', async (event) => {
    state.clients = await searchClients(event.target.value);
    renderListClients();
  })

}) ()
