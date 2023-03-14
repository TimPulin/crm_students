<template>
  <button class="btn-reset" :class="classArr" @click="deleteStudent">
    {{ title }}
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: [
      'clientId',
      'title',
      'classArr',
    ],
    methods: {
      deleteStudent() {
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
