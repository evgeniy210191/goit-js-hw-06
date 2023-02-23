console.log(
  'Number of categories: ',
  document.querySelectorAll('li.item').length
);
const item = document.querySelectorAll('.item');
console.log('Category: ', item[0].firstElementChild.innerText);
console.log('Elements: ', item[0].lastElementChild.children.length);
console.log('Category: ', item[1].firstElementChild.innerText);
console.log('Elements: ', item[1].lastElementChild.children.length);
console.log('Category: ', item[2].firstElementChild.innerText);
console.log('Elements: ', item[2].lastElementChild.children.length);
