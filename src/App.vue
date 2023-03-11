<template>

  <SiteHeader/>

  <main>
    <div class="container">
      <h1 class="title title__h1">Клиенты</h1>

      <TableClients/>

      <div class="main__bottom">

      </div>
    </div> <!-- container -->
  </main>

  <SiteFooter/>

</template>

<script>
  import SiteHeader from '@/components/site/SiteHeader.vue';
  import TableClients from  '@/components/table/TableClients.vue';
  import SiteFooter from './components/site/SiteFooter.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.min.js";

  export default {
    components: {
      SiteHeader,
      TableClients,
      SiteFooter,
    },
  };
</script>
