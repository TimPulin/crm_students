<template>
  <div>
    {{ formatFullDate() }}
    <span class="faded">
      {{ formatTime() }}
    </span>
  </div>
</template>

<script>
  export default {
    props: ['date'],
    methods: {
      formatFullDate() {
        const date = this.date;
        const computedDate = `${this.formatDate(date.getDate())}.${this.formatDate(date.getMonth())}.${date.getFullYear()} `;
        return computedDate;
      },
      formatTime() {
        const date = this.date;
        const computedTime = `${this.formatDate(date.getHours())}.${this.formatDate(date.getMinutes())}`
        return computedTime;
      },
      formatDate(date) {
        return date < 10 ? `0${date}` : date;
      },
    },

  };
</script>
