
import { createStore } from "vuex";
import clients from "@/data/clients";

export default createStore({
  state: {
    clients,
    clientInfo: {
      id: '2340',
      createdAt: '2021-08-03T13:05:29.554Z',
      updatedAt: '2021-09-03T13:07:09.554Z',
      name: 'Анатолий',
      surname: 'Сергевич',
      lastName: 'Багратион',
      contacts: [
        {
          type: 'phone',
          value: '+71234567890'
        },
        {
          type: 'vk',
          value: 'https://vk.com/id752623386'
        }
      ],
    },
    clientContacts: [],

    modalNewClient: null,
    modalClientInfo: null,
  },
  getters: {},
  mutations: {
    setModalNewClient(state, modal) {
      state.modalNewClient = modal;
    },
    setModalClientInfo(state, modal) {
      state.modalClientInfo = modal;
    },

    addEmptyContact(state) {
      state.clientContacts.push({ type: 'phone', value: null });
    },
    setClientContacts(state, contacts) {
      state.clientContacts = contacts.slice(0, contacts.length);
    },

    sortClients(state, [keySort, isReverse]) {

      if(isReverse) {
        state.clients.sort((a, b) => a[keySort] - b[keySort]).reverse()
      } else {
        state.clients.sort((a, b) => a[keySort] - b[keySort])
      }
    },
  }, // mutations
  actions: {

  }, // actions
  modules: {},
});
