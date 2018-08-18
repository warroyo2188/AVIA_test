
var elem = document.querySelector('.js-flickity');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
  selectedAttraction: 0.2,
  friction: 0.8,
  pageDots: false
});
