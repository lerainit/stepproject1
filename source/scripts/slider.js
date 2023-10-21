"use strict;"

const sliderImgs = [

  { src: "./img/Layer81.png", id: "1", text: "When starting your web design, look at other websites! It will help you get a better idea of what you are looking for on your own website.", name: 'Kate Spade', job: 'project manager' },
  { src: "./img/Layer71.png", id: "2", text: "Design is intelligence made visible There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.", name: 'John Smith', job: 'QA' },
  { src: "./img/Layer51.png", id: "3", text: "Good design is all about making other designers feel like idiots because that idea wasn’t theirs", name: 'Hasan Ali', job: 'UX designer' },
  { src: "./img/Layer61.png", id: "4", text: "Designers may be the true intellectuals of the future.", name: "Olivia Stone", job: 'QA' }
]

const buttonPrev = document.querySelector('.btn_prev');

const buttonNext = document.querySelector('.btn_next');

let currentImg = 0;
let currentBtn = 0;

const imgContainer = document.querySelector('.container_images');
const btnContainer = document.querySelector('.container');
const greenElipses = document.querySelectorAll('.elips2');

let imgContents = document.querySelectorAll('.slider_img');

const sliderItems = document.querySelectorAll('.slider_item');

let sliderItemsArray = Array.from(sliderItems);

imgContainer.insertAdjacentHTML('afterbegin', `<div class ="currentimg_container"<p class="paragraph">${sliderImgs[currentImg].text}</p><h3>${sliderImgs[currentImg].name}</h3><h3>${sliderImgs[currentImg].job}</h3><img class ="elipse" src="./img/Ellipse2.png" alt=""><img class="inserted_img" src="${sliderImgs[currentImg].src}" alt=""></div>`)

buttonPrev.addEventListener('click', () => {

  imgContents.forEach(item => item.classList.remove('slider_active'));
  sliderItems.forEach(item => item.classList.remove('transform_img'));
  greenElipses.forEach(item => item.classList.remove('transform_img'));

  let insertImg = document.querySelector('.inserted_img');
  let currentimgContainer = document.querySelector('.currentimg_container');

  if (insertImg) { insertImg.remove() }

  if (currentimgContainer) { currentimgContainer.remove() }

  if (currentBtn > 0) {
    currentBtn--
    sliderItems.forEach(item => item.classList.remove('transform_img'));
    sliderItemsArray[currentBtn].classList.add('transform_img');
    greenElipses.forEach(item => {
      item.classList.remove('transform_img');
      if (+item.dataset.img === currentBtn + 1) {
        item.classList.add('transform_img')
      }
    })

  } else {
    currentBtn = sliderItemsArray.length

    currentBtn--

    sliderItems.forEach(item => item.classList.remove('transform_img'));
    sliderItemsArray[currentBtn].classList.add('transform_img');
    greenElipses.forEach(item => {
      item.classList.remove('transform_img');

      if (+item.dataset.img === currentBtn + 1) {
        item.classList.add('transform_img')
      }

    })


  }
  if (currentImg > 0) {

    currentImg--;

    imgContainer.insertAdjacentHTML('afterbegin', `<div class ="currentimg_container"<p class="paragraph">${sliderImgs[currentImg].text}</p><h3>${sliderImgs[currentImg].name}</h3><h3>${sliderImgs[currentImg].job}</h3><img class ="elipse" src="./img/Ellipse2.png" alt=""><img class="inserted_img" src="${sliderImgs[currentImg].src}" alt=""></div>`)

  }

  else {
    currentImg = sliderImgs.length;

    currentImg--
    imgContainer.insertAdjacentHTML('afterbegin', `<div class ="currentimg_container"<p class="paragraph">${sliderImgs[currentImg].text}</p><h3>${sliderImgs[currentImg].name}</h3><h3>${sliderImgs[currentImg].job}</h3><img class ="elipse" src="./img/Ellipse2.png" alt=""><img class="inserted_img" src="${sliderImgs[currentImg].src}" alt=""></div>`)

  }


})

buttonNext.addEventListener('click', () => {

  imgContents.forEach(item => item.classList.remove('slider_active'));
  sliderItems.forEach(item => item.classList.remove('transform_img'));

  let insertImg = document.querySelector('.inserted_img');
  let currentimgContainer = document.querySelector('.currentimg_container');
  if (insertImg) { insertImg.remove() }
  if (currentimgContainer) { currentimgContainer.remove() }

  if (currentBtn <= sliderItemsArray.length - 2) {
    currentBtn++

    sliderItems.forEach(item => item.classList.remove('transform_img'));
    sliderItemsArray[currentBtn].classList.add('transform_img');
    greenElipses.forEach(item => {
      item.classList.remove('transform_img');

      if (+item.dataset.img === currentBtn + 1) {
        item.classList.add('transform_img')
      }

    })

  } else {

    currentBtn = -1

    currentBtn++
    sliderItems.forEach(item => item.classList.remove('transform_img'));
    sliderItemsArray[currentBtn].classList.add('transform_img');
    greenElipses.forEach(item => {
      item.classList.remove('transform_img');

      if (+item.dataset.img === currentBtn + 1) {
        item.classList.add('transform_img')
      }

    })

  }

  if (currentImg <= sliderImgs.length - 2) {

    currentImg++;

    imgContainer.insertAdjacentHTML('afterbegin', `<div class ="currentimg_container"<p class="paragraph">${sliderImgs[currentImg].text}</p><h3>${sliderImgs[currentImg].name}</h3><h3>${sliderImgs[currentImg].job}</h3><img class ="elipse" src="./img/Ellipse2.png" alt=""><img class="inserted_img" src="${sliderImgs[currentImg].src}" alt=""></div>`);


  } else {
    currentImg = -1;

    currentImg++

    imgContainer.insertAdjacentHTML('afterbegin', `<div class ="currentimg_container"<p class="paragraph">${sliderImgs[currentImg].text}</p><h3>${sliderImgs[currentImg].name}</h3><h3>${sliderImgs[currentImg].job}</h3><img class ="elipse" src="./img/Ellipse2.png" alt=""><img class="inserted_img" src="${sliderImgs[currentImg].src}" alt=""></div>`);

  }

})

btnContainer.addEventListener('click', (e) => {

  let target = e.target;

  e.stopPropagation();

  if (target.className != 'slider_item') return;

  currentBtn = +target.id - 1;
  sliderItems.forEach(item => item.classList.remove('transform_img'))
  target.classList.add('transform_img')
  greenElipses.forEach(item => {
    item.classList.remove('transform_img')

    if (item.dataset.img === target.id) {
      item.classList.add('transform_img')
    }

  })

  let insertImg = document.querySelector('.inserted_img')
  let currentimgContainer = document.querySelector('.currentimg_container')

  if (insertImg) { insertImg.remove() }
  if (currentimgContainer) { currentimgContainer.remove() }


  sliderImgs.forEach(item => {

    if (target.id === item.id) {

      currentImg = sliderImgs.indexOf(item)
      imgContainer.insertAdjacentHTML('afterbegin', `<div class ="currentimg_container"<p class="paragraph">${sliderImgs[currentImg].text}</p><h3>${sliderImgs[currentImg].name}</h3><h3>${sliderImgs[currentImg].job}</h3><img class ="elipse" src="./img/Ellipse2.png" alt=""><img class="inserted_img" src="${sliderImgs[currentImg].src}" alt=""></div>`);

    }

  })

})

