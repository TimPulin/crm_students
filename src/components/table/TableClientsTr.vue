<template>

    <tr class="table__tr">
      <td class="table__td">
        <span class="faded">{{ client.id }}</span>
      </td>
      <td class="table__td">
        {{ concatinateFio(client) }}
      </td>
      <td class="table__td">
        <BaseDateBox :date="client.dateCreated"/>
      </td>
      <td class="table__td">
        <BaseDateBox :date="client.dateUpdated"/>
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
          :class-arr="['btn-manage-contact', 'btn-manage-contact--change']"
          :title-button="'Изменить'"
          :title-modal="'Изменить данные'"
          :modal-type="modalType"
          :client-contacts="client.contacts"
          :client-id="client.id"
        />

        <ButtonDeleteClient
          :class-arr="['btn-manage-contact', 'btn-manage-contact--del']"
          :title="'Удалить'"
          :client-id="client.id"
        />

      </td>

    </tr>

</template>

<script>
  import BaseDateBox from '@/components/base/BaseDateBox.vue';
  import BaseIconContact from '@/components/base/BaseIconContact.vue';
  import ButtonCallModal from '@/components/ButtonCallModal.vue';
  import ButtonDeleteClient from '../ButtonDeleteClient.vue';

  export default {
    props: ['client'],
    components: {
    BaseDateBox,
    BaseIconContact,
    ButtonCallModal,
    ButtonDeleteClient
},
    data() {
      return {
        modalType: 'modalClientInfo',
      }
    },
    methods: {
      concatinateFio(client) {
        return `${client.lastName} ${client.name} ${client.surname}`
      },
    }, // methods
  };
</script>
