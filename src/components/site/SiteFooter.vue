<template>
  <footer class="footer">
    <div class="container">

      <ButtonCallModal
        :classArr="classArr"
        :titleButton="titleButton"
        :titleModal="titleModal"
        :modalType="modalType"
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
        modalType: 'modalNewClient',
        titleButton: 'Добавить клиента',
        titleModal: 'Новый клиент',
      }
    },
  }
</script>
