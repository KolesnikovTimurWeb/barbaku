const swiper3 = new Swiper('.reviews-container ', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   breakpoints: {
      640: {
         slidesPerView: 2,
         spaceBetween: 30,

      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 30,

      },

   }
});

let headerBurger = document.querySelector('.burger-menu')
let headerNav = document.querySelector('.header-nav')

headerBurger.addEventListener('click', () => {
   headerNav.classList.toggle('active')
   headerBurger.classList.toggle('active')
})


