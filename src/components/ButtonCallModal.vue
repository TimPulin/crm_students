<template>

  <button class="btn-reset" :class="classArr" @click.prevent="openModal">
    {{ titleButton }}
  </button>

</template>

<script>
  import { openModalClient } from '@/helpers/modalClientFunctions';
  import clientEmpty from "@/helpers/templateEmptyClient";
  import { mapMutations, mapActions } from 'vuex';

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
    methods: {
      ...mapMutations({
        setModalParams: 'setModalClientParams',
      }),
      ...mapActions({
        getClientCurrent: 'getClientCurrent',
      }),
      openModal() {
        this.setModalParams([this.titleModal, this.modalType, this.clientId]);

        if (this.clientId) {
          this.$store.dispatch('loadClientCurrent', this.clientId)
            .then(() => {
              openModalClient('modalClient');
            })
        } else {
          this.$store.commit('setClientCurrent', clientEmpty);
          openModalClient('modalClient');
        }
      },
    },
  }
</script>
