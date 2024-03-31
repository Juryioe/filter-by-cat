
const items = [
  {
    name: 'Plaktukas',
    price: 23,
    cat: '1',
  },
  {
    name: 'Zirkles',
    price: 23,
    cat: '1',
  },
  {
    name: 'Akumas',
    price: 23,
    cat: '2',
  },
  {
    name: 'Bobcat',
    price: 23,
    cat: '3',
  },
  {
    name: 'Graztas',
    price: 23,
    cat: '1',
  },
];

const filterItemsByCat = function (arr, filteredBy) {
  const result = arr.filter(({ cat }) => cat === filteredBy);
  return result;
};

const logas = filterItemsByCat(items, '1');
console.log('logas ===', logas);
