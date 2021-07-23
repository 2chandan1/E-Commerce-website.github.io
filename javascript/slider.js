// GLIDE JS CAROUSEL 
const slider1=document.getElementById('glide_1');
const slider2=document.getElementById('glide_2');
const slider3=document.getElementById('glide_3');
const slider4=document.getElementById('glide_4');

//HERO

if(slider1) {
    new Glide(slider1,{
        type:"carousel",
        startAt:0,
        autoplay:3000,
        hoverpause:true,
        perView:1,
        animationDuration:800,
        animationTimingFunc:"linear"

    }).mount();
}

/*

===============
LATEST PRODUCT
===============

*/

if(slider2) {
    new Glide(slider2,{
        type:"carousel",
        startAt:0,
        autoplay:3000,
        hoverpause:true,
        perView:4,
        animationDuration:800,
        animationTimingFunc:"ease-in-out",
        breakpoints:{
            1200:{
                perView:3,

            },
            768:{
                perView:2,
            },

        },

    }).mount();
}

/*
=============
Testimonial
============
*/
if(slider3){
    new Glide(slider3,{
        type:"carousel",
        startAt:0,
        autoplay:3000,
        hoverpause:true,
        perView:1,
        animationDuration:800,
        animationTimingFunc:"ease-in-out",
    }).mount();
}

/*
==================
NEWS / NEW SECTION 
===================
*/

if(slider4){
    new Glide(slider4,{
        type:"carousel",
        startAt:0,
        autoplay:3000,

        hoverpause:true,
        perView:3,
        animationDuration:800,
        animationTimingFunc:"ease-in-out",
        breakpoints:{
            998:{
                perView:2,

            },
            768:{
                perView:1,
            },

        },
    }).mount();
}