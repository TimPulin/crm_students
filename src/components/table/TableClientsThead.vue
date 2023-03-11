<template>
  <thead>
    <tr>
      <th class="table__th" scope="col">
        <TableButtonSort
          :title="'ID'"
          :keySort="'id'"
        />
      </th>

      <th class="table__th" scope="col">
        <TableButtonSort
          :title="'Фамилия Имя Отчество'"
          :keySort="'fio'"
        >
          <span class="btn-sort__letters">А-Я</span>
        </TableButtonSort>
      </th>

      <th class="table__th" scope="col">
        <TableButtonSort
          :title="'Дата и время создания'"
          :classLimitIsActive="true"
          :keySort="'createdAt'"
        />
      </th>

      <th class="table__th" scope="col">
        <TableButtonSort
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
    computed: {

    },

};

</script>
