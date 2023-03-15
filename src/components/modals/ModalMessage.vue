<template>
  <div class="modal fade" id="modalMessage" tabindex="-1" aria-labelledby="modalClientInfoLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content modal-custom">
        <div class="modal-header">
          <div class="title-wrap">

            <h2 class="title title__h2">{{ 'test' }}</h2>

          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">



        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store';
  import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min';

  export default {
    props: ['title', 'message'],
    mounted() {
      this.$nextTick(function() {
        store.commit(
          'setModalMessage',
          new Modal('#modalMessage', {})
        );
      });
    }, // mounted
  }
</script>
