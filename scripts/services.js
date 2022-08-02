"use strict;"

const contents = document.querySelectorAll('.content_item')

const webDesign = document.querySelector('#webdesign')

const firstItem = document.querySelector('.services_nav li');

firstItem.classList.add('green');

webDesign.classList.add('active')


function showContent(elem, content) {


  content.forEach(item => item.classList.remove('active'))

  let elem2 = document.querySelector(`${elem.dataset.content}`);

  return elem2.classList.add('active')


}

const table = document.querySelector('.services_nav');

const liButtons = document.querySelectorAll('.services_nav li')



table.addEventListener('click', () => {
  let target = event.target;

  if (target.tagName != 'LI') return;

  showContent(target, contents);
  liButtons.forEach(button => button.classList.remove('green'))
  target.classList.add('green')

})
