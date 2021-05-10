$(document).ready(function(){


//Ripple Iitialization Code..............
$('#profile-ripple').ripples({
   resolation: 512,
   dropRadius:10
});

  //Scill Var section
   const vars = document.querySelectorAll('.progress_bar');
   vars.forEach(function(bar){
      let parcentage = bar.dataset.percent;
      let tooltip = bar.children[0];
      tooltip.innerText = parcentage + '%';
      bar.style.width = parcentage + '%';
   })


   //Counter section-----------------------------
   const counters = document.querySelectorAll('.counter');
   
   function runCounter() {
       counters.forEach(counter => {
          counter.innerText = 0;
          let target = +counter.dataset.count;
          var step = target / 100;
           
          let countit = function(){
            let displayedcount = +counter.innerText;
            if(displayedcount < target){
              counter.innerText = Math.ceil(displayedcount + step);
               console.log(displayedcount);
               setTimeout(countit, 50);
            }else{
               counter.innerText = target;
            }
         }
          countit();
       })
   }
   let counterSection = document.querySelector('.counter_wrapper');

    let options = {
       rootMargin : '0px 0px -200px 0px'
    }

    let doneanimation = 0;

   const sectionObserver = new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting && doneanimation!==1){
         doneanimation = 1;
         runCounter();
      }
   }, options)
   sectionObserver.observe(counterSection);



   //Image Filter-----------------
   var wrappers = $('.portfolio_wrapper');
   
   wrappers.isotope({
      filter : "*",
      layoutMode : 'masonry',
      animationOptions : {
         duration : 750,
         easing : 'linear'
      }
   });

   let links = document.querySelectorAll('.tabs a');

   links.forEach(link =>{
      let selector = link.dataset.filter;
      link.addEventListener('click', function(e){
          e.preventDefault();
          wrappers.isotope({
            filter : selector,
            layoutMode : 'masonry',
            animationOptions : {
               duration : 750,
               easing : 'linear'
            }
         });

         links.forEach(link =>{
            link.classList.remove('active');
         });
         e.target.classList.add('active');
      });
   });



   $('.portfolio_wrapper .magnify').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      },  
      zoom:  {  
          enabled: true
      } 
    });


    $('.slider').slick({
       arrows : false,
       autoplay :true,
       lazyLoad: 'ondemand',
    });




});