<template>
  <footer>
    <div class="container">

      <ButtonCallModal
        :classArr="classArr"
        :titleButton="titleButton"
        :titleModal="titleModal"
        :modalId="modalId"
        :clientContacts="clientContacts"
      />

    </div>
  </footer>
</template>

<script>
  import ButtonCallModal from '@/components/ButtonCallModal.vue';

  export default {
    components: {
    ButtonCallModal
  },
  data() {
      return {
        classArr: [
          'btn-reset',
          'btn-secondarys'
        ],
        modalId: 'modalNewClient',
        titleButton: 'Добавить клиента',
        titleModal: 'Новый клиент',
        clientContacts: [{ type: 'phone', value: null }],
      }
    },
  }
</script>
