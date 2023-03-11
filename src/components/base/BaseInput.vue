<template>
  <label class="form-label">
  {{ title }}
    <input class="form-control" type="text" v-model="value">
  </label>
</template>

<script>
  export default {
    props: {
      title: String,
      incomingValue: {
        type: String,
        default: null,
      },
    }, // props
    // emits: ['update:icomingValue'],
    data() {
      return {
        localValue: this.incomingValue,
      }
    }, // data
    computed: {
      value: {
        get() {
          return this.localValue;
        },
        set(value) {
          this.localValue = value;
          this.updateValue();
        },
      },
    }, //computed
    methods: {
      updateValue() {
        this.$emit('update:icomingValue', this.localValue)
      },
    }, // methods
  }

</script>
