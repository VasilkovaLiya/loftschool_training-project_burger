$(document).ready(function(){
       
   $('.vertical-accordeon__item').on('click', e  => {
    e.preventDefault ()
    let elem = $(e.currentTarget)
    elem.toggleClass('vertical-accordeon__item_active');
    
    if (elem.hasClass('vertical-accordeon__item_active')) {
             
        elem.siblings().removeClass('vertical-accordeon__item_active');
        
      } 
    })

    $('.team-acco a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('team-acco__trigger--active')) {
            element.removeClass('team-acco__trigger--active'); 
            element.find('div').slideUp();           
        }
        else {
            element.addClass('team-acco__trigger--active');                 
            element.children('div').slideDown();
            element.siblings('li').children('div').slideUp();
            element.siblings('li').removeClass('team-acco__trigger--active');
            
        }
    });

  

})

$(document).ready(function(){
   
    var smallSize = false;
    $(window).resize(function(){
      if (!smallSize && $(window).width() <= 480) {
        $(".seeReview").text("Читать отзыв!")
        smallSize = true;
      }
    })
    
    // $('.seeReview').on('click', e  => {
    //     e.preventDefault ()
    //     let link = $(e.currentTarget);
    //     let rName= link.parent().siblings('.review_name').text();
    //     let rText= link.parent().siblings('.review_text').text();
    //     $('.review_name--black').text('rName');
    //     $('.review_name--text').text('rText');        
    
    // })
   
})
$(document).ready(function(){
    $(".main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 500,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });
})



    $(document).ready(function(){
        $('.slider__container').bxSlider();
      });


      $(document).ready(function(){
        $('.screen_scroll-down--right').on('click', function(){
            $('.bx-next').click();
        })
        $('.screen_scroll-down--left').on('click', function(){
            $('.bx-prev').click();
        })
      });
