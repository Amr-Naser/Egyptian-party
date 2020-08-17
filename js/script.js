
let body1 = $('.collapse-body1');
let body2 = $('.collapse-body2');
let body3 = $('.collapse-body3');
let body4 = $('.collapse-body4');
let counter = 100;

// collapse

$('#Btn1').click(function(){
    body1.slideToggle(500);
    body2.slideUp(500);
    body3.slideUp(500);
    body4.slideUp(500);

});
$('#Btn2').click(function(){
    body2.slideToggle(500);
    body1.slideUp(500);
    body3.slideUp(500);
    body4.slideUp(500);
});
$('#Btn3').click(function(){
    body3.slideToggle(500);
    body1.slideUp(500);
    body2.slideUp(500);
    body4.slideUp(500);
});
$('#Btn4').click(function(){
    body4.slideToggle(500);
    body1.slideUp(500);
    body2.slideUp(500);
    body3.slideUp(500);
});


// Dropdown


$('#close').click(function(){
    $('#dropdown').animate({width:"0"},500)
});
$('#dropdown-sign').click(function(){
    $('#dropdown').animate({width:"250"},500)
});


// Scroll
$('#home').click(function(){
    $('html body').animate({scrollTop:'0'},1500)
});

// Links

$('a').click(function(){
    let href = $(this).attr('href');
    let sectionOffset = $(href).offset().top;
    $('html body').animate({scrollTop:sectionOffset},1500)
})

// Messege counter


$('#messegeInput').keyup(function(){
   
    let valNumber = $(this).val();
    counter=100-valNumber.length;
    if(counter<0)
    {
        $('#counter').text('your available character finished');
    } 
    else
    {
        $('#counter').text(counter);
    }   
})

// Duration

let countDownDate = new Date("December 31, 2020 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $("#second").text(seconds);
  $("#minute").text(minutes);
  $("#hour").text(hours);
  $("#day").text(days);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $('#row').html('<h2 style="color:#fff">Expired</h2>');
  }
}, 1000);