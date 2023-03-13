<template>
  <div class="modal-contact">

    <select name="contact-type" class="modal-contact__select-type form-select"
      :selected="contact.type"
      @change="updateContactType(index, $event)"
    >
      <option value="phone" class="select__option">Телефон</option>
      <option value="email" class="select__option">Email</option>
      <option value="fb" class="select__option">Facebook</option>
      <option value="vk" class="select__option">VK</option>
      <option value="else" class="select__option">Другое</option>
    </select>

    <input class="modal-contact__input-info form-control" type="text" placeholder="Введите данные контакта"
      :value="contact.value"
      @keyup="updateContactValue(index, $event)"
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
    props: ['contact', 'index'],
    emits: [
      'updateContactType',
      'updateContactValue',
    ],
    components: {
      IconCross,
    },
    methods: {
      updateContactType(index, e) {
        this.$store.commit('setClientCurrentContactType', [index, e.target.value])
      },
      updateContactValue(index, e) {
        this.$store.commit('setClientCurrentContactValue', [index, e.target.value])
      },
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
