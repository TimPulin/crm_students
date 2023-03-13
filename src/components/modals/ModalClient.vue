<template>
  <div class="modal fade" id="modalClient" tabindex="-1" aria-labelledby="modalClientInfoLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content modal-custom">
        <div class="modal-header">
          <div class="title-wrap">
            <h2 class="title title__h2">{{ title }}</h2>
            <span class="title__additional-info faded" v-if="isShow()"> ID: {{ clientId }}</span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">

          <formClientCurrent/>

        </div>
      </div>
    </div>
</div>
</template>

<script>
  import store from '@/store';
  import formClientCurrent from '@/components/form/formClientCurrent.vue';
  import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min';
  import { mapState } from 'vuex';

  export default {
    components: {
      formClientCurrent,
    },
    computed: {
      ...mapState({
        title: 'title',
        modalType: 'modalType',
        clientId: 'clientId',

      }),
    }, // computed
    methods: {
      isShow() {
        return this.modalType === 'modalClientInfo';
      },
    }, // methods
    mounted() {
      this.$nextTick(function() {
        store.commit(
          'setModalClient',
          new Modal('#modalClient', {})
        );
      });
    }, // mounted
  };
</script>
