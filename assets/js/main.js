$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    
//Click event handler for nav-items
$('.nav-item').on('click',function(){

    //Remove any previous active classes
    $('.nav-item').removeClass('active');
  
    //Add active class to the clicked item
    $(this).addClass('active');
  });
  });




 $(document).ready(function(){
    $('.home-slide').owlCarousel({
  loop:true,
        margin: 0,

  /*autoplay: 3000,*/
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
  })
  });



  const showPatint = document.getElementById("ifYes");
window.onload = function() {
  document.getElementById('ifYes').style.display = 'none';
  document.getElementById('ifNo').style.display = 'none';
}
// function yesnoCheck() {
//   if (document.getElementById('yesCheck').checked) {
//       document.getElementById('ifYes').style.display = 'block';
      
// ifNo
//       document.getElementById('ifNo').style.display = 'none';
//   } 
//   else if(document.getElementById('noCheck').checked) {
//       document.getElementById('ifNo').style.display = 'block';
//       document.getElementById('ifYes').style.display = 'none';
    
//  }
 
// }

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYesForm').style.display = 'block';
        document.getElementById('ifYes').style.display = 'block';
        document.getElementById('ifNo').style.display = 'none';
        document.getElementById('ifNoForm').style.display = 'none';
        
  ifNoForm
        document.getElementById('ifNoForm').style.display = 'none';
        document.getElementById('ifNo').style.display = 'none';
    } 
    else if(document.getElementById('noCheck').checked) {
        document.getElementById('ifNoForm').style.display = 'block';
        document.getElementById('ifYesForm').style.display = 'none';
        document.getElementById('ifNo').style.display = 'block';
       document.getElementById('ifYes').style.display = 'none';
      
   }

   
   
  }
  
  document.addEventListener("mousemove" , parrallax);
function parrallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/150
    const y = (window.innerHeight - e.pageY*speed)/150

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    
  });
}

  

