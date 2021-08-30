// MDB Animations initialization
$( document ).ready(function() {
    new WOW().init();
  });

$( ".wow" ).addClass( "slideInUp slow" );

// Card
$('.card').click(function() {
    $('.card-body').toggleClass('close');
});




