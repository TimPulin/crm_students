<template>
  <form class="modal__form" action="POST" @submit.prevent="submitForm">
    <fieldset class="form-fieldset form-fieldset--fio">


      <label class="form-label">
        {{ 'Фамилия*' }}
        <input class="form-control" type="text" :value="client.lastName" @keyup="updateLastname">
      </label>

      <label class="form-label">
        {{ 'Имя*' }}
        <input class="form-control" type="text" :value="client.name" @keyup="updateName">
      </label>

      <label class="form-label">
        {{ 'Отчество' }}
        <input class="form-control" type="text" :value="client.surname" @keyup="updateSurname">
      </label>

    </fieldset> <!-- modal__fieldset--fio -->

    <fieldset class="form-fieldset form-fieldset--contacts">

      <ModalContactsList
        v-for="(contact, index) in client.contacts"
        :key="index"
        :contact="contact"
        :index="index"
      />

      <div class="modal__btn-wrap">
        <ButtonAddNewContact
          @click.prevent="addContactEmpty"
          v-show="isShowBtnAddContact(client.contacts)"
        />
      </div>

      <div class="messages-wrap">
        <p class="messages-wrap__message"
          v-for="(message, index) in messagesErrors"
          :key="index"
        >
          {{ message.message }}
        </p>
      </div>
    </fieldset> <!-- modal__fieldset--contacts -->


    <fieldset class="form-fieldset form-fieldset--control-btns">
      <button class="btn-reset btn-primarys">Сохранить</button>

      <ButtonDeleteClient
        v-if="isShowBtnDel()"
        :class-arr="['modal__btn-del']"
        :title="'Удалить клиента'"
        :client-id="client.id"
      />
      <button v-else class="btn-reset modal__btn-del">Отмена</button>
    </fieldset>

  </form>
</template>

<script>

  import ModalContactsList from '@/components/modals/ModalContactsList.vue';
  import ButtonAddNewContact from '@/components/ButtonAddNewContact.vue';
  import ButtonDeleteClient from '@/components/ButtonDeleteClient.vue';
  import { closeModalClient } from '@/helpers/modalClientFunctions';
  import { mapState, mapMutations } from 'vuex';

  export default {
    components: {
      ModalContactsList,
      ButtonAddNewContact,
      ButtonDeleteClient,
    },
    computed: {
      ...mapState({
        modalType: 'modalType',
        client: 'clientCurrent',
        messagesErrors: 'messagesErrors',
      }),
    }, // computed
    methods: {
      ...mapMutations({
        addContactEmpty: 'addContactEmpty',
      }),
      updateLastname(e) {
        this.$store.commit('setClientCurrentLastname', e.target.value)
      },
      updateName(e) {
        this.$store.commit('setClientCurrentName', e.target.value)
      },
      updateSurname(e) {
        this.$store.commit('setClientCurrentSurname', e.target.value)
      },

      submitForm() {
        if (this.client.id) {
          this.$store.dispatch('updateClientCurrent', this.client.id)
            .then(() => {
              closeModalClient('modalClient');
            })
        } else {
          this.$store.dispatch('addClientNew')
            .then(() => {
              closeModalClient('modalClient');
            })
            .catch(() => {
              console.log(this.messagesErrors);
            })
        }
      },

      isShowBtnDel() {
        return this.modalType === 'modalClientInfo';
      },
      isShowBtnAddContact(contacts) {
        if(contacts) {
          return contacts.length < 10;
        } else {
          return true;
        }
      },
    }, // methods
  }
</script>
