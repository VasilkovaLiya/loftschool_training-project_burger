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

