document.addEventListener('DOMContentLoaded', () => {
    const samsungLogo = document.querySelector('header img:first-child');
    const mainText = document.querySelector('.content-main-txt');
    const buttonShop = document.querySelector('.content-shop-button');
    const textContent = mainText.innerHTML;
    const firstSlide = document.querySelector('.first-slide');
    const contentDescription = document.querySelector('.content-description');
    const contentNavMenu = document.querySelector('.content-nav-menu');
    const bgLayer = document.querySelector('.bg-layer-img');

    mainText.innerHTML = textContent.split('<br>').map(line =>
        `<div class="text-line">${line}</div>`
    ).join('');

    const textLines = document.querySelectorAll('.text-line');

    gsap.set(samsungLogo, {
        x: '-100%',
        y: 180,
        opacity: 0
    });

    gsap.set(buttonShop, {
        x: '-100%',
        opacity: 0
    });


    gsap.set(textLines, {
        x: '-100%',
        y: '',
        opacity: 0
    });

    gsap.set(bgLayer, {
        width: "100%",
        x: "0%",

    });

    gsap.set(contentDescription, {
        opacity: 0,
        x: '0',
    });

    gsap.set(contentNavMenu, {
        opacity: 0,
        x: '0',
    });

    const masterTl = gsap.timeline({
        defaults: {
            ease: "power2.out"
        }
    });

    masterTl
        .to([samsungLogo, buttonShop], {
            x: 0,
            opacity: 1,
            duration: 1
        })
        .to([samsungLogo], {
            y: 0,
            duration: 0.8,
            ease: "power1.out"
        })
        .to(textLines, {
            x: 0,
            opacity: 1,
            duration: 2,
            stagger: 0.35
        }, "+=0.2")

        .to(bgLayer, {
            width: "870px",
            duration: 1.3,
            ease: "power1.out",
        })
        .to(contentDescription, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out"
        })

});