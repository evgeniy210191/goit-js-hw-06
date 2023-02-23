const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const unordList = document.getElementById('ingredients');
const addListFn = (list) => {
  return list.map((items) => {
    const item = document.createElement('li');
    item.innerText = items;
    item.classList = 'item';
    return item;
  });
};
const addList = addListFn(ingredients);
unordList.append(...addList);
