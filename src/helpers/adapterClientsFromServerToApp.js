export default function adapterClientsFromServerToApp(serverClients) {
  return serverClients.map((item) => ({
    ...item,
    fio: `${item.lastName} ${item.name} ${item.surname}`,
    dateCreated: new Date(item.createdAt),
    dateUpdated: new Date(item.updatedAt),
  }))
}
