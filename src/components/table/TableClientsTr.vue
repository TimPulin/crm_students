<template>

    <tr class="table__tr">
      <td class="table__td">
        <span class="faded">{{ client.id }}</span>
      </td>
      <td class="table__td">
        {{ concatinateFio(client) }}
      </td>
      <td class="table__td">
        <BaseDateBox :date="client.createdAt"/>
      </td>
      <td class="table__td">
        <BaseDateBox :date="client.updatedAt"/>
      </td>
      <td class="table__td table__td--contacts">
        <div class="icon-contact-wrap">
          <BaseIconContact
            v-for="(contact, index) in client.contacts"
            :key="index"
            :contact="contact"
          />
        </div> <!-- icon-contact-wrap -->
      </td>
      <td class="table__td">

        <ButtonCallModal
          :classArr="classArr"
          :titleButton="titleButton"
          :titleModal="titleModal"
          :modalType="modalType"
          :clientContacts="client.contacts"
          :client-id="client.id"
        />

        <button class="btn-reset btn-manage-contact btn-manage-contact--del">Удалить</button>
      </td>

    </tr>

</template>

<script>
  import BaseDateBox from '@/components/base/BaseDateBox.vue';
  import BaseIconContact from '@/components/base/BaseIconContact.vue';
  import ButtonCallModal from '@/components/ButtonCallModal.vue';

  export default {
    props: ['client'],
    components: {
      BaseDateBox,
      BaseIconContact,
      ButtonCallModal,
    },
    data() {
      return {
        classArr: [
          'btn-reset',
          'btn-manage-contact',
          'btn-manage-contact--change',
        ],
        modalType: 'modalClientInfo',
        titleButton: 'Изменить',
        titleModal: 'Изменить данные',
      }
    },
    methods: {
      concatinateFio(client) {
        return `${client.lastName} ${client.name} ${client.surname}`
      },
      setClientId(clientId) {
        this.clientId = clientId;
      },
    }, // methods
  };
</script>
