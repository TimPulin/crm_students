<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="logo-block">
          <img class="logo-block__img" src="@/../public/img/icon-logo-skb.svg" alt="Логотип скб">
        </div>
        <div class="header__search-block">
          <input class="header__search-input form-control" type="text" placeholder="Введите запрос"
            @input="searchClients"
          >
        </div>
      </div> <!-- header__wrap -->
    </div> <!-- container -->
  </header>
</template>

<script>
  export default {
    data() {
      return {
        searchTimeoutId: null,
      }
    },
    methods: {
      searchClients(e) {
        clearTimeout(this.searchTimeoutId);

        this.searchTimeoutId = setTimeout(() => {
          this.$store.dispatch('searchClients', e.target.value)
        }, 300)
      }
    }
  };
</script>
