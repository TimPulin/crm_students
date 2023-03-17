const API = 'http://localhost:3000/api/clients';

async function getClientsFromServer() {
  const respons = await fetch(API);
  return respons;
}
