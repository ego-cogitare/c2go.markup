$(document).ready(function() {
  // new Swiper('#home-slider-01', {
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   nextButton: $(this).find('.btn-next'),
  //   prevButton: $(this).find('.btn-prev'),
  //   paginationClickable: true,
  //   autoplay: 5000,
  //   loop: true,
  //   spaceBetween: 0,
  //   mousewheelControl: false,
  //   speed: 1000
  // });



  // $(window).bind('resize', function() {
  //   var width = $('body').width();
  //
  //   if (width < 768) {
  //     $('.awards').appendTo($('.product-picture'));
  //   }
  //   if (width >= 768 && width < 1024) {
  //     $('.awards').insertBefore($('.general-info'));
  //   }
  // })
  // .trigger('resize');

  new Swiper('.events-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    //pagination: '.swiper-pagination',
    //autoplayStopOnLast: true,
    // autoplay: 4000,
    paginationClickable: true,
    loop: false,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });

  var calendar = window.calendar = rome(
    document.getElementById('date'),
    {
      time: false ,
      "weekdayFormat": "min",
      inputFormat: 'MM/DD/YYYY',
      weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      dayFormat: 'D',
      appendTo: $('.filter-item.date').get(0)
    }
  );

  $('#date + .fa-calendar').on('mouseup', function() {
    setTimeout(function() { calendar.show(); }, 100);
  });
});
