"use strict;"

let bestIMGContainer = document.querySelector('.best_img')

bestimgBtn = document.querySelector('.bestimg_btn')


const bestImgArray = ["./img/Layer4.png",
  "./img/designapp.png",
  "./img/seoservice.png",
  "./img/Layer6.png",
  "./img/Layer9.png",
  "./img/Layer54.png",
  "./img/Layer50.png"]

bestimgBtn.addEventListener('click', () => {

  bestIMGContainer.insertAdjacentHTML('beforeend', `<div class="loader">
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
  loader.style.marginTop = '510px'

  window.setTimeout(() => {

    if (loader) { loader.remove() }

    bestIMGContainer.insertAdjacentHTML('beforeend', `<div class="img_container2" data-masonry='{ "itemSelector": ".item_after", "columnWidth": 200 }'></div>`)
    const bestImg = document.querySelector('.img_container2')


    bestImgArray.forEach(item => {

      bestImg.insertAdjacentHTML('afterbegin', `<div class="item_after" style="height:300px;">
	<img style="height:300px;" src =${item} alt="bestimg"></div>`)

      bestimgBtn.style.display = 'none'


    })

    let height3 = window.getComputedStyle(bestIMGContainer).height.replace('px', '')
    bestIMGContainer.style = `height:${+height3 + 900}px;`
    const footer = document.querySelector('footer')


  }, 2500)

})