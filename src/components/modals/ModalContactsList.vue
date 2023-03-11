<template>
  <div class="modal-contact" v-for="(contact, index) in contacts" :key="index">

    <select name="contact-type" class="modal-contact__select-type form-select" v-model="contact.type">
      <option value="phone" class="select__option">Телефон</option>
      <option value="email" class="select__option">Email</option>
      <option value="fb" class="select__option">Facebook</option>
      <option value="vk" class="select__option">VK</option>
      <option value="else" class="select__option">Другое</option>
    </select>

    <input class="modal-contact__input-info form-control" type="text" placeholder="Введите данные контакта"
      v-model="contact.value"
    >

    <button class="btn-reset modal-contact__btn-del" data-bs-toggle="tooltip" title="Удалить контакт"
      v-if="isShow(contact.value)"
    >
      <IconCross/>

    </button>

  </div> <!-- modal-contact -->
</template>

<script>
  import IconCross from '@/components/icons/IconCross.vue';

  export default {
    props: ['contacts'],
    components: {
      IconCross,
    },
    data() {
      return {

      }
    },
    methods: {
      isShow(value) {
        if (value) {
          return true;
        } else {
          return false;
        }
      },
    }, // methods
  }
</script>
