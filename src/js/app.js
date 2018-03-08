$(document).ready(function() {
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
    paginationClickable: true,
    loop: false,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });



  var $date = $('#date').get(0);
  var calendar = rome(
    $date, {
    time: false ,
    inputFormat: 'MM/DD/YYYY',
    weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dayFormat: 'D',
    appendTo: $date.parentNode
  })
  .on('hide', function() {
    $date.blur();
  });
  $($date).next('.fa-calendar').on('click', function() {
    setTimeout(function() { calendar.show(); }, 100);
  });



  var autocompleteSettings = {
    //types: ['(cities)'],
    componentRestrictions: {'country': 'de'},
    language: 'de'
  };

  var $autocompleteFrom = $('#autocomplete-from').get(0);
  var autocompleteFrom = new google.maps.places.Autocomplete($autocompleteFrom, autocompleteSettings)
  .addListener('place_changed', function() {
    $autocompleteFrom.blur();
    console.log('Selected place', this.getPlace());
  });

  var $autocompleteTo = $('#autocomplete-to').get(0);
  var autocompleteTo = new google.maps.places.Autocomplete($autocompleteTo, autocompleteSettings)
  .addListener('place_changed', function() {
    $autocompleteTo.blur();
    console.log('Selected place', this.getPlace());
  });

});
