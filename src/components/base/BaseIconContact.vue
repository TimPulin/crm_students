<template>
  <button class="icon-contact btn-reset" data-bs-toggle="tooltip" :title="contactDetails">
    <IconContactPhone v-if="isShow('phone')"/>
    <IconContactEmail v-if="isShow('email')"/>
    <IconContactVk v-if="isShow('vk')"/>
    <IconContactFb v-if="isShow('fb')"/>
    <IconContactElse v-if="isShow('else')"/>
  </button>
</template>
<!-- else, phone, vk, fb, email -->
<script>

  import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';
  import IconContactElse from '../icons/IconContactElse.vue';
  import IconContactEmail from '../icons/IconContactEmail.vue';
  import IconContactFb from '../icons/IconContactFb.vue';
  import IconContactPhone from '../icons/IconContactPhone.vue';
  import IconContactVk from '../icons/IconContactVk.vue';

  export default {
    props: ['contact'],
    components: {
      IconContactElse,
      IconContactEmail,
      IconContactFb,
      IconContactPhone,
      IconContactVk,
    },
    data() {
      return {
        contactDetails: this.contact.value,
        contactType: this.contact.type,
      }
    },
    methods: {
      isShow(contactType) {
        return contactType === this.contactType;
      },
    },
    mounted() {
      this.$nextTick(function () {
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
          .forEach(tooltipNode => new Tooltip(tooltipNode))
      });
    },
  };
</script>
