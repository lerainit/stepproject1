"use strict;"

const gallery = document.querySelector('.gallery_img')

const galleryContainer = document.querySelector('.gallery')
//Массивы картинок--------------------------------------------------------------------------------- 
const sources = [
  { src: "./img/vanglo-house-11.png", category: "landing-pages" },
  { src: "./img/80493541_1281644acb_o1.png", category: "web-design" },
  { src: "./img/7328272788_c5048326de_o1.png", category: "graphic-design" },
  { src: "./img/p1_81.png", category: "landing-pages" },
  { src: "./img/ringve-museum-12.png", category: "graphic-design" },
  { src: "./img/vanglo-house-11.png", category: "landing-pages" },
  { src: "./img/vanglo-house-11.png", category: "graphic-design" },
  { src: "./img/ringve-museum-12.png", category: "web-design" },
  { src: "./img/vanglo-house-11.png", category: "landing-pages" },
  { src: "./img/vanglo-house-11.png", category: "web-design" },
  { src: "./img/p1_81.png", category: "word-press" },
  { src: "./img/ringve-museum-12.png", category: "landing-pages" }]

const sources2 = [
  { src: "./img/vanglo-house-11.png", category: "landing-pages" },
  { src: "./img/Layer4.png", category: "web-design" },
  { src: "./img/7328272788_c5048326de_o1.png", category: "graphic-design" },
  { src: "./img/p1_81.png", category: "landing-pages" },
  { src: "./img/ringve-museum-12.png", category: "graphic-design" },
  { src: "./img/vanglo-house-11.png", category: "landing-pages" },
  { src: "./img/Layer7.png", category: "graphic-design" },
  { src: "./img/ringve-museum-12.png", category: "web-design" },
  { src: "./img/vanglo-house-11.png", category: "landing-pages" },
  { src: "./img/Layer12.png", category: "web-design" },
  { src: "./img/p1_81.png", category: "word-press" },
  { src: "./img/ringve-museum-12.png", category: "landing-pages" }]

const firstImagesSources = [
  { src: "./img/graphic-designer.jpg", category: "graphic-design" },
  { src: "./img/Layer4.png", category: "graphic-design" },
  { src: "./img/Layer5.png", category: "web-desig" },
  { src: "./img/Layer6.png", category: "landing-pages" },
  { src: "./img/Layer7.png", category: "web-design" },
  { src: "./img/Layer8.png", category: "graphic-design" },
  { src: "./img/Layer9.png", category: "word-press" },
  { src: "./img/Layer10.png", category: "landing-pages" },
  { src: "./img/Layer11.png", category: "landig-pages" },
  { src: "./img/Layer12.png", category: "web-design" },
  { src: "./img/Layer13.png", category: "word-press" },
  { src: "./img/Layer14.png", category: "word-press" }]
//--------------------------------------------------------------------------------------------------

//Функция для отрисовски картинок:
const insertImgs = (array) => {
  array.forEach(item => {

    gallery.insertAdjacentHTML('beforeend', `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img data-card = "card_img"  src=${item.src} alt="img" style="width:260px;height:220px;" class=${item.category}>
    </div>
     <div class="flip-card-back">
    <div class ="back_icos"><img  src="./img/Ellipse.png" alt="">
    <img src="./img/Combinedshape7431.png" alt="">
    <img src="./img/Ellipse1.png" alt="">
    <img src="./img/Layer23.png" alt=""></div>
      <h1>Creative Design</h1>
      <p>Web Design</p>
      </div>
  </div>
</div>`)

  })
}
//Первая порция картинок на странице
insertImgs(firstImagesSources)

const buttonGallery = document.querySelector('.gallery_btn');
const nextButton = document.querySelector('.next_btn')

//Переменная необходимая для определения количества нажатий кнопки

let powIndex = 0;
//------------------------------------------------------------------------------------------------
//Обработчик события

buttonGallery.addEventListener('click', () => {

  powIndex++

  //Анимация перед загрузкой----------------------------------------------------------------------
  gallery.insertAdjacentHTML('beforeend', `<div class="loader">
  <div class="bar bar1"></div>
  <div class="bar bar2"></div>
  <div class="bar bar3"></div>
  <div class="bar bar4"></div>
  <div class="bar bar5"></div>
  <div class="bar bar6"></div>
  <div class="bar bar7"></div>
  <div class="bar bar8"></div>
</div>`)
  let loader = document.querySelector('.loader')

  loader.style.marginTop = '460px'
  if (window.getComputedStyle(galleryContainer).height === '1912px') { loader.style.marginTop = '780px' }

  //Таймаут пока показано анимацию для имитации загрузки с сервера----------------------------------
  window.setTimeout(() => {

    if (loader) { loader.remove() }//удалении анимации после загрузки картинок

    // Изменения высоты секции при добавлении новых картинок-------------------------------------

    let height = window.getComputedStyle(galleryContainer).height.replace('px', '')

    if (window.getComputedStyle(galleryContainer).height < '2612px') { galleryContainer.style = `height:${+height + 700}px;` }

    //Загрузка картинок из первого массива-----------------------------------------------------------------------------------------------------
    if (powIndex === 1) {

      insertImgs(sources)

    } else {
      //из второго массива:------------------------------------------------------------------------------------------------------------------------

      insertImgs(sources2)

    }
    //Изменение положения кнопки после добавления новых картинок------------------------------------------------------------------------------
    buttonGallery.style = 'position:absolute;top:1600px;left:45%;transform:traslateX(-50%)'

    //Код который работает,когда мы уже отфильтровали картинки по какой либо категории и находясь в ней подгружаем еще картинки.
    //Для того чтобы подгружались не все картинки,а только из выбранной категории а так же секция не увеличилась при загрузке,так как картинок меньшее кол-во

    const cards = document.querySelectorAll('[data-card="card_img"]')

    const card1 = document.querySelector('.flip-card.category img:first-child ')

    if (card1) {

      let height = window.getComputedStyle(galleryContainer).height.replace('px', '')
      galleryContainer.style = `height:${+height - 700}px;`

      buttonGallery.style = 'position:absolute;top:900px;left:45%;transform:traslateX(-50%)';

      cards.forEach(card => {
        if (card.className !== card1.className) {

          card.parentNode.parentNode.parentNode.classList.add('active')
        }
      })
    }
    //Удаление кнопки после второй загрузки картинок------------------------------------------------------------------------------------------
    if (powIndex === 2) {
      buttonGallery.remove()
    }
  }, 3000)

})
//--------------------------------------------------------------------------------------------------------------------------------
const galleryBtn = document.querySelector('.gallery_nav');

galleryBtn.addEventListener('click', (e) => {

  let target = e.target;

  if (target.tagName != 'LI') return;
  let height = window.getComputedStyle(galleryContainer).height.replace('px', '')

  const flipCards = document.querySelectorAll('.flip-card')
  flipCards.forEach(card => card.classList.remove('category'))
  const navItem = document.querySelectorAll('.nav_item')

  navItem.forEach(item => item.style.border = 'none')

  e.target.style = "border:2px solid #18CFAB "

  const images = document.querySelectorAll('.flip-card')
  //При нажатии категории All показывать все картинки а так же увеличить высоту секции-------------------------------
  if (target.innerText === 'All') {
    images.forEach(item => item.classList.remove('active'))
    if (powIndex === 1) {
      galleryContainer.style = `height:${+height + 700}px;`
      buttonGallery.style = 'position:absolute;top:1600px;left:45%;transform:traslateX(-50%)'
    }
    if (window.getComputedStyle(galleryContainer).height < '2612px' && powIndex > 1) {
      galleryContainer.style = `height:${+height + 1400}px;`
      buttonGallery.style = 'position:absolute;top:1600px;left:45%;transform:traslateX(-50%)'
    }
  } else {
    // при нажатии остальных категорий-------------------------------------------------------------------------
    images.forEach(item => item.classList.add('active'))

    let currentElems = document.querySelectorAll(`${target.dataset.category}`);
    //изменение высоты страницы и положения кнопки всех категорий кроме All-----------------------------------------------------------
    if (window.getComputedStyle(galleryContainer).height === '1912px') {
      galleryContainer.style = `height:${+height - 700}px;`
      buttonGallery.style = 'position:absolute;top:900px;left:45%;transform:traslateX(-50%)'
    }

    else if (window.getComputedStyle(galleryContainer).height === '2612px') {
      galleryContainer.style = `height:${+height - 1400}px;`
      buttonGallery.style = 'position:absolute;top:900px;left:45%;transform:traslateX(-50%)'
    }

    return currentElems.forEach(item => {
      item.parentNode.parentNode.parentNode.classList.remove('active')
      item.parentNode.parentNode.parentNode.classList.add('category')
    }
    )
  }

})


