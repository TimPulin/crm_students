<template>
  <button class="btn-reset" :class="classArr" @click="deleteStudent">
    {{ title }}
    <slot></slot>
  </button>
</template>

<script>
  import { openModalClient } from '@/helpers/modalClientFunctions';
  export default {
    props: [
      'clientId',
      'title',
      'classArr',
    ],
    methods: {
      deleteStudent() {
        openModalClient('modalMessage');
        const isDelete = confirm('Точно удалить?');

        if (isDelete) {
          this.$store.dispatch('deleteClient', this.clientId)
          .then(() => {
              alert('Клиент удален');
            })
            .catch(() => {
              alert('Ошибка при удалении');
            })
        }
      },
    },

  }
</script>
