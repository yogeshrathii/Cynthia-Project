var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .from("#herofotter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
        })
}

function chapta() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        mousefollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

        }, 100);


    })

}
function mousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
document.querySelectorAll(".elem").forEach(function (elem) {

    var diffr=0;
    var rotater=0;
     elem.addEventListener("mouseleave", function (dets) {
      
        gsap.to(elem.querySelector("img"),

            {
                opacity: 0,
                ease: Power3,
            }

        )

    })

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffr = dets.clientX - rotater;
        rotater = dets.clientX;
        gsap.to(elem.querySelector("img"),

            {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20,25,diffr  * 0.8),
            }

        )

    })
})



mousefollower();
firstpageanim();
chapta();
