const clientAdapter = {
  toClient: (client) => {
    return {
      id: client.id,
      fio: `${client.surname} ${client.name} ${client.lastName}`,
      name: client.name,
      surname: client.surname,
      lastName: client.lastName,
    }
  }, //toClient
};
