
const state = {
  clients: [],
  clientCurrent: {},

  theadElemsFeatures: [
    {
      text: 'ID',
      valueSortBy: 'id',
      class: ['btn-reset', 'btn-sort', 'btn-sort--active'],
      isIconArrow: true,
    },
    {
      text: 'Фамилия Имя Отчество',
      valueSortBy: 'fio',
      class: ['btn-reset', 'btn-sort'],
      isIconArrow: true,
      isIconLetters: true,
    },
    {
      text: 'Дата и время создания',
      valueSortBy: 'createdAt',
      class: ['btn-reset', 'btn-sort'],
      isIconArrow: true,
    },
    {
      text: 'Последние изменения',
      valueSortBy: 'updatedAt',
      class: ['btn-reset', 'btn-sort'],
      isIconArrow: true,
    },
  ],
}
