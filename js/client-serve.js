const API = 'http://localhost:3000/api/clients';

async function getClientsFromServer() {
  const respons = await fetch(API);
  const clientsServer = await respons.json();

  return clientsServer.map(clientAdapter.toClient);
}

async function searchClients(searchString) {
  const respons = await fetch(API + '?' + new URLSearchParams({search: searchString}));

  const clientsServer = await respons.json();

  return clientsServer.map(clientAdapter.toClient);
}
