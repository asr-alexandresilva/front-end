jQuery(document).ready(function () {

    const buttons = jQuery('.btn_ripple');
    jQuery(buttons).each(function () {
        jQuery(this).on('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            }, 1000);
        });
    });
});

// ************* SCRIPT PARA ES6 *************

// const buttons = document.querySelectorAll('.btn_ripple');
// buttons.forEach(btn => {
//     btn.addEventListener('click', function(e){
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop; 

//         let ripples = document.createElement('span');
//         ripples.style.left = x + 'px';
//         ripples.style.top = y + 'px';
//         this.appendChild(ripples);

//         setTimeout(() => {
//             ripples.remove()
//         }, 1000);
//     });
// });

// *******************************************