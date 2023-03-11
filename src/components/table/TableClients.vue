<template>
  <table class="table">

    <TableClientsThead/>

    <tbody class="table__tbody">

      <TableClientsTr
        v-for="client in clients" :key="client.id"
        :client="client"
      />

    </tbody>




  </table>
</template>

<script>
  import TableClientsThead from '@/components/table/TableClientsThead.vue'
  import TableClientsTr from '@/components/table/TableClientsTr.vue';
  import { mapActions, mapState } from 'vuex';
  //

  export default {
    components: {
      TableClientsThead,
      TableClientsTr,
    },
    data() {
      return {
        // clients: null,
      }
    },
    computed: {
      ...mapState({
        clients: 'clients',
      }),
    }, //computed
    methods: {
      ...mapActions({
        sortClients: 'sortClients',
      }),
    },
  };
</script>
