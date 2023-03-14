
import { createStore } from "vuex";
import axios from 'axios';
import API_BASE_URL from '@/config';
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

    messagesErrors: [],

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

    setMessagesErrors(state, messages) {
      state.messagesErrors = messages;
    },


    addContactEmpty(state) {
      state.clientCurrent.contacts.push({ type: 'phone', value: null });
    },

    resetClientEmpty() {
      clientEmpty.lastName = '';
      clientEmpty.name = '';
      clientEmpty.surname = '';
      clientEmpty.contacts.splice(0, clientEmpty.contacts.length);
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
    loadClients(context) {
      return axiosInstans
      .get('/api/clients')
      .then((response) => {
          context.commit('updateClients', response.data);
        })
    },

    loadClientCurrent(context, clientId) {
      return axiosInstans
        .get(`/api/clients/${clientId}`)
        .then((response) => {
          context.commit('setClientCurrent', response.data);
        })
    },

    updateClientCurrent(context, clientId) {
      return axiosInstans
        .patch(
          `/api/clients/${clientId}`,
          context.state.clientCurrent
        )
        .then(() => {
          this.dispatch('loadClients');
        })
    },

    addClientNew(context) {
      return axiosInstans
        .post(
          '/api/clients',
          context.state.clientCurrent
        )
        .then((response) => {
          context.commit('resetClientEmpty');
          this.dispatch('loadClients');
          return response;
        })
        .catch((response) => {
          context.commit('setMessagesErrors', response.response.data.errors)
          return Promise.reject(response)
        })
    },

    deleteClient(context, clientId) {
      return axiosInstans
        .delete(`/api/clients/${clientId}`)
        .then((response) => {
          this.dispatch('loadClients');
          console.log('then');
          return response;
        })
        .catch((response) => {
          console.log(response);
          return Promise.reject(response);
        })
    },

    searchClients(context, searchString) {
      return axiosInstans
        .get(
          '/api/clients',
          {
            params: {
              search: searchString,
            },
          },
        )
        .then((response) => {
          context.commit('updateClients', response.data);
        })
    },
  }, // actions
  modules: {},
});
