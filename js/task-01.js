console.log(
  'Number of categories: ',
  document.querySelectorAll('li.item').length
);
const item = document.querySelectorAll('.item');
for (const element of item) {
  console.log('Category: ', element.firstElementChild.innerText);
  console.log('Elements: ', element.lastElementChild.children.length);
}
