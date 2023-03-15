<template>

  <button class="btn-reset btn-sort"
    :class="classObj"
    @click="sendId(), sort()"
  >
    {{ title }}
    <IconArrow :class-obj="'btn-sort__icon'"/>
    <slot></slot>
  </button>
</template>

<script>
  import IconArrow from '@/components/icons/IconArrow.vue';
  import { mapMutations } from 'vuex';

  export default {
    props: {
      title: String,
      classLimitIsActive: {
        type: Boolean,
        default: false,
      },
      keySort: String,
      buttonId: Number,
      activeButtonId: Number,
    },
    emits: ['send-id'],
    components: { IconArrow },
    data() {
      return {
        reverse: false,
      }
    },
    computed: {
      classObj() {
        return {
          'btn-sort--limit': this.classLimitIsActive,
          'btn-sort--active': this.buttonId === this.activeButtonId,
          'btn-sort--reverse': this.reverse,
        }
      },
    }, // computed
    methods: {
      ...mapMutations({
        sortClients: 'sortClients',
      }),
      isReverse() {
          this.reverse ? this.reverse = false : this.reverse = true;
        },
      sendId() {
        this.$emit('send-id', this.buttonId)
      },
      sort() {
        this.isReverse();
        this.sortClients([this.keySort, this.reverse])
      },
    }, // methods
  }
</script>
