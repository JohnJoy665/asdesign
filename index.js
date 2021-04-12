const gallery = document.querySelector('.gallery')
const gallerySlideWindowBigRow = gallery.querySelector('.gallery__slide-window_big-row')
const gallerySlideWindowMiddleRow = gallery.querySelector('.gallery__slide-window_middle-row')
const gallerySlideWindowSmallRow = gallery.querySelector('.gallery__slide-window_small-row')
const gallerySliders = gallery.querySelectorAll('.gallery__slider')

function handleScrollGallery(event) {
  var modifier = 1;
  this.scrollLeft += modifier * event.deltaY;
  event.preventDefault();
}


const dragObj = {}

function customeMouseDown(evt) {
  const dragObj = this
  if (evt.which != 1) {
    return
  }
  dragObj.downX = evt.clientX
  const positionElem = this.scrollLeft

  function moveThis(evt) {
    evt.preventDefault()
    const mousePoint = evt.clientX
    const firstPoint = dragObj.downX
    this.scrollLeft =  positionElem - (mousePoint-firstPoint);
  }

  function dontMoveThis(evt) {
    evt.preventDefault()
    this.removeEventListener('mousemove', moveThis)
  }

  this.addEventListener('mousemove', moveThis)
  this.addEventListener('mouseup', dontMoveThis)
}

function test(evt) {
  this.style.backgroundColor = "#ffffff"
}


function addEventListeners(item) {
  item.addEventListener('wheel', function (evt) { handleScrollGallery.call(this, evt) })
  item.addEventListener('mousedown', function (evt) { customeMouseDown.call(this, evt) })
  item.addEventListener('touchstart', function (evt) { test.call(this, evt) })
}


Array.from(gallerySliders).forEach((item) => {
  addEventListeners(item)
})



function setheightGallery() {
  gallerySlideWindowBigRow.style.height = Math.round(window.innerHeight / 100 * 30) + 'px'
  gallerySlideWindowMiddleRow.style.height = Math.round(window.innerHeight / 100 * 19) + 'px'
  gallerySlideWindowSmallRow.style.height = Math.round(window.innerHeight / 100 * 8) + 'px'
}

window.addEventListener(`resize`, setheightGallery)
setheightGallery()