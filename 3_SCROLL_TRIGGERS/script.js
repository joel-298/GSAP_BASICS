var tl = gsap.timeline() ; 
tl.from("h2",{
    y:-30,
    opacity:0,
    duration:0.3,
})
tl.from("h4",{ // this will run just after the above one is executed
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:0.1
})
tl.from("h1",{
    y:30,
    opacity:0,
})

// SCROLL TRIGGERS
gsap.from(".page1 .box",{
    scale:0,
    scrollTrigger:{
        trigger:".page1 .box",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 10%"
    }
})
gsap.from(".page2 .box",{
    scale:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
    }
})
gsap.from(".h1",{
    y:-10,
    opacity:0,
    // stagger:0.5, not working as expected !
})
gsap.from(".page3 .box",{
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
        scrub:1,
    }
})

gsap.to(".page4 .h1", {
    transform : "translateX(-600%)",
    scrollTrigger: { 
        trigger: ".page4", // PIN : pin on child trigger on parent
        scroller: "body",
        start: "top 0%",
        end: "top -100%", 
        scrub: true,
        pin:true
    }
})
