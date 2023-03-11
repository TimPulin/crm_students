<template>

  <button :class="classArr" @click.prevent="openModal">
    {{ titleButton }}
  </button>

</template>

<script>
  import { openModalClient } from '@/helpers/modalClientFunctions';
    import { mapMutations } from 'vuex';

  export default {
    props: {
      classArr: Array,
      titleButton: String,
      titleModal: String,
      modalType: String,
      clientContacts: {
        type: Object,
        default: null,
      },
      clientId: {
        type: [String, Number],
        default: null,
      },
    },
    // components: { ModalClient },
    methods: {
      ...mapMutations({
        setClientContacts: 'setClientContacts',
        setModalParams: 'setModalClientParams',
      }),
      openModal() {
        this.setClientContacts(this.clientContacts);
        this.setModalParams([this.titleModal, this.modalType, this.clientId])
        openModalClient('modalClient');
      },
    },
  }
</script>
