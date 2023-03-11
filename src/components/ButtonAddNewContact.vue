<template>
  <button class="btn-reset btn-manage-contact" @click.prevent="addEmptyContact">
    <IconPlus/>
    Добавить контакт
  </button>
</template>

<script>
  import IconPlus from './icons/IconPlus.vue';
  import { mapMutations } from 'vuex';

  export default {
    components: {
      IconPlus,
    },
    methods: {
      ...mapMutations({
        addEmptyContact: 'addEmptyContact',
      }),
    },
  }
</script>
