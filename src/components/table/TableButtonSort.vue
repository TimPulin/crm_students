<template>
  <button class="btn-reset btn-sort"
    :class="{'btn-sort--limit': classLimitIsActive}"
    @click=" test">
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
    },
    components: { IconArrow },
    data() {
      return {
        reverse: false,
      }
    },
    methods: {
      ...mapMutations({
        sortClients: 'sortClients',
      }),
      isReverse() {
        this.reverse ? this.reverse = false : this.reverse = true;
      },
      test() {
        this.isReverse();
        this.sortClients([this.keySort, this.reverse])
      },
    }, // methods
  }
</script>
