function drawLogoWidth() {
    let logo = document.querySelector('header .header_bottom .logo');
    let logo_bg = document.querySelector('header .header_bottom .bg_logo');
    let width = logo.getBoundingClientRect().left + logo.offsetWidth + 24;
    logo_bg.style.width = width + 'px';

    let home_slider_buttons = document.querySelector('#home .home-slider-buttons');
    let home_container = document.querySelector('#home .main_container');
    home_slider_right = home_container.getBoundingClientRect().left + parseInt(window.getComputedStyle(home_container, null).getPropertyValue('padding-left')) + "px";
    home_slider_buttons.style.right = home_slider_right;
}

drawLogoWidth();

window.onresize = () => drawLogoWidth();

let home_slider = new Swiper(".home_slider", {
    spaceBetween: 0,
    effect: "fade",
    pagination: {
        el: ".home-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#home .home-slider-buttons .next_button",
        prevEl: "#home .home-slider-buttons .prev_button",
    },
});

let complect_slider = new Swiper(".complect_slider", {
    navigation: {
        nextEl: "#service .complect .slider_buttons .next_button",
        prevEl: "#service .complect .slider_buttons .prev_button",
    },
});

let tab_contents = document.querySelectorAll('#service2 .tab_item');
console.log(tab_contents);
if (tab_contents.length) {
    tab_contents.forEach(el => {
        let sliderEl = el.querySelector('.tab_content_slider');
        let prev = el.querySelector('.buttons .prev_button');
        let next = el.querySelector('.buttons .next_button');
        let tab_content_slider = new Swiper(sliderEl, {
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    })
}

let bars = document.querySelector('header .header_mobile_bars');
let bars2 = document.querySelector('header .header_mobile .close_header_mobile')
let header_mobile = document.querySelector('header .header_mobile');
bars.onclick = () => {
    header_mobile.classList.remove('noActive');
    header_mobile.classList.add('active');
}
bars2.onclick = () => {
    header_mobile.classList.remove('active');
    header_mobile.classList.add('noActive');
}