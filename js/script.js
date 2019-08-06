// $(function() {
 
//     var menu_ul = $('.menu > li > ul'),
//         menu_a  = $('.menu > li > a');
     
//     menu_ul.hide();
 
//     menu_a.click(function(e) {
//         e.preventDefault();
//         if(!$(this).hasClass('active')) {
//             menu_a.removeClass('active');
//             menu_ul.filter(':visible').slideUp('normal');
//             $(this).addClass('active').next().stop(true,true).slideDown('normal');
//         } else {
//             $(this).removeClass('active');
//             $(this).next().stop(true,true).slideUp('normal');
//         }
//     });
 
// });


const dropdownControllers = $('.list__dd-wrapper');
dropdownControllers.on('click', function(){
    $('.active').next().slideUp();
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.active').next().slideToggle();
})

const goToPrevPageBtn = $('.goToPrevPage');
goToPrevPageBtn.on('click', function(){
    history.back(-1);
})