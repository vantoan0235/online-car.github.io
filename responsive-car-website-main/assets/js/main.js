/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), //// lấy id nav-menu
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/ // ===========thanh 3 gạch
/* Validate if constant exists */
// Xác thực nếu hằng số tồn tại
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/ //==========thanh x
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
 // reponsive , ví dụ khi click vào chữ home sẽ ra trang chủ của home
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    // Khi click vào từng nav__link, chúng ta loại bỏ lớp show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/ // phần background màu đen header 
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    // Khi cuộn lớn hơn 50 chiều cao khung nhìn, hãy thêm lớp tiêu đề cuộn vào thẻ tiêu đề
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView:'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
const LinkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
  LinkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
LinkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))


/*=============== SHOW SCROLL UP ===============*/ 
// <!-- mũi tên đi lên -->
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/* mở thanh menu ra active màu xanh chữ  */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.home__car-data`, {delay: 900, interval:100, origin: 'bottom'})
sr.reveal(`.home__button`, {delay: 1100, origin: 'bottom'})
sr.reveal(`.about__group, .offer__data`, {origin: 'left'})
sr.reveal(`.about__data, .offer__img`, {origin: 'right'})
sr.reveal(`.features__map`, {delay: 600, origin: 'bottom'})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured__card, .logos__content, .footer__content`, {interval: 100})



// search
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
  search.classList.toggle('active');
  cart.classList.remove('active');
  user.classList.remove('active');
}

// cart
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
  cart.classList.toggle('active');
  search.classList.remove('active');
  user.classList.remove('active');
}

// login
let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
  user.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
}









// code hieu ung khi di chuyen chuot
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
  + "px; top: " + e.clientY + "px;";

});
