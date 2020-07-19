jQuery(document).ready(function(){
    // script menu desktop
    var marker = jQuery('#marker');
    var item = jQuery('.nav_desktop a');
    jQuery(item).each(function(link){
        jQuery(this).on('mouseover', function(e){
            indicator(e.target);
            jQuery('#marker').removeClass('item_menu_active');
        });
        jQuery(this).on('click', function(e){
            indicator(e.target);
            jQuery('#marker').addClass('item_menu_active');
        });
    });

    // script menu hamburguer
    jQuery(document).on('click', '.toggle', function(e){
        jQuery(this).toggleClass('active');
        jQuery('.menu_mobile').fadeToggle(500);
    });

});

// ************* SCRIPT PARA ES6 MENU DESKTOP *************

// var marker = document.querySelector('#marker');
// var item = document.querySelectorAll('nav a');
// item.forEach(link => {
//     link.addEventListener('mouseover', (e)=>{
//         indicator(e.target);
//         marker.classList.remove('item_menu_active');
//     });
//     link.addEventListener('click', (e)=>{
//         indicator(e.target);
//         marker.classList.add('item_menu_active');
//     });
// });

// *******************************************

function indicator(e){
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
};