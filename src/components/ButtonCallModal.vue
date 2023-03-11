<template>

  <button :class="classArr" @click.prevent="openModal">
    {{ titleButton }}
  </button>

    <Teleport to="body">
      <ModalClient
      :title="titleModal"
      :modal-id="modalId"
      :client-id="clientId"
      />
    </Teleport>


</template>

<script>
  import { openModalClient } from '@/helpers/modalClientFunctions';
  import ModalClient from '@/components/modals/ModalClient.vue';
  import { mapMutations } from 'vuex';

  export default {
    props: {
      classArr: Array,
      titleButton: String,
      titleModal: String,
      modalId: String,
      clientContacts: Object,
      clientId: {
        type: [String, Number],
        default: null,
      },
    },
    components: { ModalClient },
    methods: {
      ...mapMutations({
        setClientContacts: 'setClientContacts',
      }),
      openModal() {
        this.setClientContacts(this.clientContacts);
        openModalClient(this.modalId);
      },
    },
  }
</script>
