
import { createStore } from "vuex";
import axios from 'axios';
import API_BASE_URL from '@/config';
// import clients from "@/data/clients";
import clientEmpty from "@/helpers/templateEmptyClient";

const axiosInstans = axios.create({
  baseURL: API_BASE_URL,
})

export default createStore({
  state: {
    testName: 'test',
    clients: [],

    clientCurrent: {},

    modalClient: null,
    title: null,
    modalType: null,
    clientId: null,

    clientsLoading: false,
    clientsLoadingFailed: false,
  },

  getters: {},

  mutations: {
    setModalClientParams(state, [title, modalType, clientId]) {
      state.title = title;
      state.modalType = modalType;
      state.clientId = clientId;
    },
    setModalClient(state, modal) {
      state.modalClient = modal;
    },

    setClientCurrent(state, client) {
      state.clientCurrent = client;
    },

    setClientCurrentLastname(state, lastName) {
      state.clientCurrent.lastName = lastName;
    },
    setClientCurrentName(state, name) {
      state.clientCurrent.name = name;
    },
    setClientCurrentSurname(state, surname) {
      state.clientCurrent.surname = surname;
    },

    setClientCurrentContactType(state, [index, type]) {
      state.clientCurrent.contacts[index].type = type;
    },
    setClientCurrentContactValue(state, [index, value]) {
      state.clientCurrent.contacts[index].value = value;
    },


    addContactEmpty(state) {
      state.clientCurrent.contacts.push({ type: 'phone', value: null });
    },

    sortClients(state, [keySort, isReverse]) {
      if(isReverse) {
        state.clients.sort((a, b) => a[keySort] - b[keySort]).reverse()
      } else {
        state.clients.sort((a, b) => a[keySort] - b[keySort])
      }
    },

    updateClients(state, clients) {
      state.clients = clients;
    },
  }, // mutations

  actions: {
    getClientCurrent(context) {
      if(context.state.modalType === 'modalNewClient') {
        context.commit('setClientCurrent', clientEmpty);
      } else {
        console.log();
      }
    },

    loadClients(context) {
      return axiosInstans
      .get('/api/clients')
      .then((response) => {
          context.commit('updateClients', response.data);
        })
    },

    addClientNew(context) {
      return axiosInstans
        .post(
          '/api/clients',
          context.state.clientCurrent
        )
        .then(() => {
          this.dispatch('loadClients');
        })
    },

    loadClientCurrent(context, clientId) {
      return axiosInstans
        .get(`/api/clients/${clientId}`)
        .then((response) => {
          context.commit('setClientCurrent', response.data)
        })
    }

  }, // actions
  modules: {},
});
