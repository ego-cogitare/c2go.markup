$(document).ready(function() {
  new Swiper('.events-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    paginationClickable: true,
    loop: false,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });


  /**
   * Date picker
   */
  var $date = $('#date').get(0);
  if ($date)
  {
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
  }

  /**
   * Date picker
   */
  var $date = $('#birthdate').get(0);
  if ($date)
  {
    var calendar = rome(
      $date, {
      time: false ,
      inputFormat: 'DD.MM.YYYY',
      weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      dayFormat: 'D',
      appendTo: $date.parentNode
    });
  }


  /**
   * Google places autocomplete
   */
  var autocompleteSettings = {
    //types: ['(cities)'],
    componentRestrictions: {'country': 'de'},
    language: 'de'
  };
  var $autocompleteFrom = $('#autocomplete-from').get(0);
  if ($autocompleteFrom)
  {
    var autocompleteFrom = new google.maps.places.Autocomplete($autocompleteFrom, autocompleteSettings)
    .addListener('place_changed', function() {
      $autocompleteFrom.blur();
      console.log('Selected place', this.getPlace());
    });
  }
  var $autocompleteTo = $('#autocomplete-to').get(0);
  if ($autocompleteTo)
  {
    var autocompleteTo = new google.maps.places.Autocomplete($autocompleteTo, autocompleteSettings)
    .addListener('place_changed', function() {
      $autocompleteTo.blur();
      console.log('Selected place', this.getPlace());
    });
  }


  /**
   * Categories dropdown
   */
  $('.filter-item.category').on('click', function() {
    $(this).toggleClass('expanded');
  });


  /**
   * Close popup
   */
  $('.popup .close').on('click', function() {
    $(this).closest('.popup-wrapper').removeClass('opened');
  });
});
