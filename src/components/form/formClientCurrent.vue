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
                <ButtonAddNewContact @click.prevent="addContactEmpty"/>
              </div>
            </fieldset> <!-- modal__fieldset--contacts -->


            <fieldset class="form-fieldset form-fieldset--control-btns">
              <button class="btn-reset btn-primarys">Сохранить</button>
              <button v-if="isShow()" class="btn-reset modal__btn-del">Удалить клиента</button>
              <button v-else class="btn-reset modal__btn-del">Отмена</button>
            </fieldset>

          </form>
</template>

<script>

  import ModalContactsList from '@/components/modals/ModalContactsList.vue';
  import ButtonAddNewContact from '@/components/ButtonAddNewContact.vue';
  import { closeModalClient } from '@/helpers/modalClientFunctions';
  import { mapState, mapMutations } from 'vuex';

  export default {
    components: {
      ModalContactsList,
      ButtonAddNewContact,
    },
    computed: {
      ...mapState({
        modalType: 'modalType',

        client: 'clientCurrent',
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
        this.$store.dispatch('addClientNew')
          .then(() => {
            closeModalClient('modalClient');
        })
      },

      isShow() {
        return this.modalType === 'modalClientInfo';
      },
    }, // methods
  }
</script>
