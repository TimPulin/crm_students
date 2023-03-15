<template>
  <thead>
    <tr>
      <th class="table__th" scope="col">
        <TableButtonSort
          @send-id="setActiveButtonId"
          :buttonId="1"
          :activeButtonId="activeButtonId"
          :title="'ID'"
          :keySort="'id'"
        />
      </th>

      <th class="table__th" scope="col">
        <TableButtonSort
          @send-id="setActiveButtonId"
          :buttonId="2"
          :activeButtonId="activeButtonId"
          :title="'Фамилия Имя Отчество'"
          :keySort="'fio'"
        >
          <span class="btn-sort__letters">А-Я</span>
        </TableButtonSort>
      </th>

      <th class="table__th" scope="col">
        <TableButtonSort
          @send-id="setActiveButtonId"
          :buttonId="3"
          :activeButtonId="activeButtonId"
          :title="'Дата и время создания'"
          :classLimitIsActive="true"
          :keySort="'createdAt'"
        />
          <!-- :keySort="'dateCreated'" -->
      </th>

      <th class="table__th" scope="col">
        <TableButtonSort
          @send-id="setActiveButtonId"
          :buttonId="4"
          :activeButtonId="activeButtonId"
          :title="'Последние изменения'"
          :classLimitIsActive="true"
          :keySort="'updatedAt'"
        />
      </th>

      <th class="table__th" scope="col">
        Контакты
      </th>
      <th class="table__th" scope="col">
        Действия
      </th>
    </tr>
  </thead>
</template>

<script>
  import TableButtonSort from '@/components/table/TableButtonSort.vue';

  export default {
    components: {
      TableButtonSort,
    },
    data() {
      return {
        activeButtonId: 1,
      }
    }, // data
    methods: {
      setActiveButtonId(id) {
        this.activeButtonId = id;
      }
    },
  }

</script>
