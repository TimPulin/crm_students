<template>
  <div class="modal fade" id="modalClient" tabindex="-1" aria-labelledby="modalClientInfoLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content modal-custom">
        <div class="modal-header">
          <div class="title-wrap">
            <h2 class="title title__h2">{{ title }}</h2>
            <span class="title__additional-info faded" v-if="isShow()"> ID: {{ clientId }}</span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <form class="modal__form" action="POST">
            <fieldset class="form-fieldset form-fieldset--fio">

              <!-- <BaseInput
                :title="'Фамилия*'"
                v-model:incomingValue="lastName"
              /> -->

              <label class="form-label" for="control-1">

                <input class="form-control" type="text" id="control-1">
              </label>

              <label class="form-label" for="control-2">
                Имя*
                <input class="form-control" type="text" id="control-2">
              </label>

              <label class="form-label" for="control-3">
                Отчество
                <input class="form-control" type="text" id="control-3">
              </label>
            </fieldset> <!-- modal__fieldset--fio -->

            <fieldset class="form-fieldset form-fieldset--contacts">

              <ModalContactsList :contacts="clientContacts"/>

              <div class="modal__btn-wrap">
                <ButtonAddNewContact/>
              </div>
            </fieldset> <!-- modal__fieldset--contacts -->


            <fieldset class="form-fieldset form-fieldset--control-btns">
              <button class="btn-reset btn-primarys">Сохранить</button>
              <button v-if="isShow()" class="btn-reset modal__btn-del">Удалить клиента</button>
              <button v-else class="btn-reset modal__btn-del">Отмена</button>
            </fieldset>

          </form>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  import store from '@/store';
  import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min';
  import ModalContactsList from '@/components/modals/ModalContactsList.vue';
  import ButtonAddNewContact from '@/components/ButtonAddNewContact.vue';
  // import BaseInput from '@/components/base/BaseInput.vue';
  import { mapState, mapMutations } from 'vuex';

  export default {
    components: {
      ModalContactsList,
      ButtonAddNewContact,
      // BaseInput,
    },
    data() {
      return {
        // lastName: this.incomingLastName,
        // surname: this.incomingSurname,
        // name: this.incomingName,
      }
    },
    computed: {
      ...mapState({
        // incomingLastName: 'clientInfo.lastName',
        // incomingSurname: 'clientInfo.surname',
        // incomingName: 'clientInfo.name',
        clientContacts: 'clientContacts',

        // new for modal
        title: 'title',
        modalType: 'modalType',
        clientId: 'clientId',

      }),
    },
    methods: {
      ...mapMutations({
        setClientContacts: 'setClientContacts',
      }),
      isShow() {
        return this.modalType === 'modalClientInfo';
      },
    },
    mounted() {
      this.$nextTick(function() {
        store.commit(
          'setModalClient',
          new Modal('#modalClient', {})
        );
      });
    }, // mounted
  };
</script>
