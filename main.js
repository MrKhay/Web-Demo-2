window.onload = function digital_fn(){

    // toggle button
    let toggle = document.querySelector("#nav .menu-btn")
    let toggle_navbar= document.querySelector("#nav .collapse ")
    let toggle_logo = document.querySelector("#nav .nav-brand .logo")

    toggle.addEventListener('click',function(event){
        toggle_navbar.classList.toggle('toggle-nav-visibility')
      toggle_logo.classList.toggle('toggle-logo-visiblity')
        // console.log(toggle)
    });


}

"use strict";
var myNav = document.getElementById('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300 ) {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored")

    } else {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
}






