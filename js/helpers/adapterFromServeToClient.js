const clientAdapter = {
  toClient: (client) => {
    return {
      id: client.id,
      fio: `${client.surname} ${client.name} ${client.lastName}`,
      name: client.name,
      surname: client.surname,
      lastName: client.lastName,
      createdAt: client.createdAt,
      createdAtDate: formatFullDate(client.createdAt),
      createdAtTime: formatFullTime(client.createdAt),
      updatedAt: client.updatedAt,
      updatedAtDate: formatFullDate(client.updatedAt),
      updatedAtTime: formatFullTime(client.updatedAt),
      contacts: client.contacts,
    }
  }, //toClient
};

function formatFullDate(dateIncoming) {
  const date = new Date(dateIncoming);
  const day = formatDate(date.getDate() );
  const month = formatDate(date.getMonth() );

  return `${day}.${month}.${date.getFullYear()} `
}

function formatFullTime(dateIncoming) {
  const date = new Date(dateIncoming);
  const hours = formatDate(date.getHours() );
  const minutes = formatDate(date.getMinutes() );

  return `${hours}.${minutes}`
}

function formatDate(dateIncoming) {
  return dateIncoming < 10 ? `0${dateIncoming}`: dateIncoming;
}
