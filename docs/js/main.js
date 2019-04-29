$(document).ready(function() {
	// "use strict";
	let navToggleButton = $('.navigation__toogle'),
	navBlock = $('.navigation__list'),
	navBlockOpen = 'navigation__list--open',
	navLink = $('.navigation__list a'),
	navIcon = $('#mobile-menu'),
	navIconActive = 'burger-btn-active',
	navFix = 'navigation__toogle--fixed';

    //Мобильная навигация
    navToggleButton.on('click', function(e) {
        e.preventDefault(); //отменяем стандартное поведение элемента
        navBlock.toggleClass(navBlockOpen);
        navIcon.toggleClass(navIconActive);
        navToggleButton.toggleClass(navFix);
      });

    // По клику по пункту в мобильном меню, удаляем класс и переходим к выбранному пункту

    navLink.on('click', function() {   // Находим в навигации пункты меню (ссылки)
    	navBlock.removeClass(navBlockOpen); // При клике удаляем класс --open 
    	navIcon.toggleClass(navIconActive);
    	navToggleButton.toggleClass(navFix);
    });

// Sliders
$('.owl-carousel--header ').owlCarousel({
 items:1,
 center: true,
 nav:true,
 mouseDrag: true,
 dots: true,
	 	// autoplay: true
	 });

$('.owl-carousel--other ').owlCarousel({
 margin:10,
 nav:true,
 navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
 dots: true,
 mouseDrag: true,
 items:1
});

$('.owl-carousel--orange').owlCarousel({
 nav:true,
 navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
 mouseDrag: true,
 responsiveClass:true,
 responsive:{
  0:{
    items:1,
    center:true,  
    nav:true
  },
  525:{
    items:3,
    nav:true
  },
  768:{
    items:3,
    nav:true
  },
  992:{
    items:5,
    nav:true
  },
  1140:{
    items:6,
    nav:true,
    loop:false
  }
}
});

    // Sticky menu
    $(document).ready(function(){
    	$("#sticker").sticky({
    		topSpacing:0,
    		zIndex:5
    	});
    });

    //slide2id - плавная прокрутка по ссылкам внутри страницы
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
     highlightSelector:"nav a"
   });

// fancybox
$('[data-fancybox="gallery"]').fancybox({
    transitionEffect: "circular",
  });
// Tooltip bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip(
    { container: 'body',
    placement: 'bottom',
    html:true
  }
  );
});

// Modal JQ
// $('.js-open-modal').on('click', function(e){
//   e.preventDefault();
//   let modalName = $(this).attr('data-modal');
//   let modal = $('.js-modal[data-modal="' + modalName + '"]');
//   modal.addClass('is-show');
//   $('.js-fade-modal').addClass('is-show');
// });

// $('.js-modal-close').on('click', function(e){
//   e.preventDefault();
//   $(this).parent('.js-modal').removeClass('is-show');
//   $('.js-fade-modal').removeClass('is-show');
// });

// $('.js-fade-modal').on('click', function(){
//   $('.js-modal.is-show').removeClass('is-show');
//   $(this).removeClass('is-show');
// })

// Modal JS
let linkArray = document.querySelectorAll('.js-open-modal');
let modal = document.querySelector('.js-modal');
let fadeModal = document.querySelector('.js-fade-modal');
let closeArray = document.querySelectorAll('.js-modal-close');


linkArray.forEach(function(item){
  item.addEventListener('click',function(e){
    e.preventDefault();
    let modalName = this.getAttribute('data-modal');
     modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');

    modal.classList.add('is-show');
    fadeModal.classList.add('is-show');
  });
});

closeArray.forEach(function(close){

  close.addEventListener('click', function(){
    let parent = this.parentNode;
    parent.classList.remove('is-show');
    fadeModal.classList.remove('is-show');
  });
});
fadeModal.addEventListener('click', function(){
    fadeModal.classList.remove('is-show');
   modal.classList.remove('is-show');

});

});




