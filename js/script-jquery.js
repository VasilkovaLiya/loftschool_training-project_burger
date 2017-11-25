

$(document).ready(function(){
    //вертикальный аккордеон
$('.vertical-accordeon__item').on('click', e  => {
 e.preventDefault ()
 let elem = $(e.currentTarget)
 elem.toggleClass('vertical-accordeon__item_active');
 
 if (elem.hasClass('vertical-accordeon__item_active')) {
          
     elem.siblings().removeClass('vertical-accordeon__item_active');
     
   } 

 })





   //горизонтальный аккордеон
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

//меню в моб версии
 $('.menu-hamburger-link').on('click', function(){
     $('.hamb-menu').css('display','block');
     //$("section:not(.first_screen)").css('display','none');
        
     $('.onepage-pagination').css('right','-99999px');
 });
  $('#closeIcon').on('click', function(){
     $('.hamb-menu').css('display','none');
     $('.onepage-pagination').css('right','25px');
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
 


})



 $(document).ready(function(){
     $('.slider__container').bxSlider();
   });


   $(document).ready(function(){
     $('.screen_scroll-down--right').on('click', function(e){
         e.preventDefault();
         $('.bx-next').click();
     })
     $('.screen_scroll-down--left').on('click', function(e){
         e.preventDefault();
         $('.bx-prev').click();
     })
   });


   $(document).ready(function () {

     $('#name').keyup(function(){
         var name = $('#name').val();
                 
         if (name.length < 3){
             $('#name').css('background','#f06969');
         }else {
             $('#name').css('background','#fff');
         }
             
     });	
     
     $('#tel').keyup(function(){
         var tel = $('#tel').val();
                 
         if (tel.length < 7){
             $('#tel').css('background','#f06969');
         }else {
             $('#tel').css('background','#fff');
         }
             
     });	
     $('#street').keyup(function(){
         var street = $('#street').val();
                 
         if (street.length < 4){
             $('#street').css('background','#f06969');
         }else {
             $('#street').css('background','#fff');
         }
             
     });	
     $('#house').keyup(function(){
         var house = $('#house').val();
                 
         if (house.length < 1){
             $('#house').css('background','#f06969');
         }else {
             $('#house').css('background','#fff');
         }
             
     });	
     $('#flat').keyup(function(){
         var flat = $('#flat').val();
                 
         if (house.length < 1){
             $('#flat').css('background','#f06969');
         }else {
             $('#flat').css('background','#fff');
         }
             
     });	
         // if ($('#noCall').prop('checked')) {
         
         // }
     

     $("#form").on('submit', function (e) {
         e.preventDefault();
         var color = $('input').css('background-color');
         
         if (color == 'rgb(240, 105, 105)') {
             alert ('Проверьте правильность заполнения полей формы');
         } else {

             $.ajax('data.php', {
               type: "POST",
               data: $(this).serialize(),
               success: function (data) {
                 $('#result').text(data);
                 $('#result').css('display', 'block');

               }
             })
         }
       })
       
        $("#reset").on('click', function (e) {
            e.preventDefault();
             $("input").val('');
             $("input").css('background-color','#fff');
             

            
        })
       
       
       $("body").on('click', function () {
             var openMes = $('.result').css('display');
                 
             if (openMes == 'block') {
                 $('.result').css('display', 'none');
             }else {
                
             }
             
         });	
       
       
       
       
   });
   $(document).ready(function(){
   ymaps.ready(init);
   var myMap;

   function init(){     
       myMap = new ymaps.Map("map", {
           center: [59.91817154482064,30.30557799999997],
           zoom: 11,
           controls: [],
       });
       myMap.behaviors.disable('scrollZoom'); 
     
      
     var coords = [
             [59.94554327989287,30.38935262114668], 
             [59.91142323563909,30.50024587065841], 
             [59.88693161784606,30.319658102103713], 
             [59.97033574821672,30.315194906302924]
         ],
         myCollection = new ymaps.GeoObjectCollection({}, {
             iconLayout: 'default#image',
             iconImageHref: '/img/contacts/map-marker.svg',
             iconImageSize: [46, 57],
             iconImageOffset: [-26, -52],
             draggable: false 
         });
     
         for (var i = 0; i < coords.length; i++) {
             myCollection.add(new ymaps.Placemark(coords[i]));
         }
         myMap.geoObjects.add(myCollection);
          
    


      
   }

})