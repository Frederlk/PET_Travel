window.onload = function () {
   $(document).ready(function () {
      //main-slider
      //========================================================================================================================================================
      $('.testi__slider').slick({
         nextArrow: $('.page__testi .navigation__nav-item_next'),
         prevArrow: $('.page__testi .navigation__nav-item_prev'),
         zIndex: 10,
         speed: 800,
         fade: true,
      });

      let circle = document.querySelectorAll('.circle');
      for (let i = 0; i < circle.length; i++) {
         window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            circle[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 30 + 'px)';
         });
      };
      let second = document.querySelectorAll('.second');
      for (let i = 0; i < second.length; i++) {
         window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            second[i].style.transform = 'translate(-' + x * 20 + 'px, +' + y * 50 + 'px)';
         });
      };
      let cross = document.querySelectorAll('.cross');
      for (let i = 0; i < cross.length; i++) {
         window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            cross[i].style.transform = 'translate(+' + x * 30 + 'px, +' + y * 10 + 'px)';
         });
      }
   });
};