var tl = gsap.timeline() ; 

tl.from("h2",{
    x:-50,
    opacity:0,
    duration:0.5,
    delay:0.5
})
tl.from("h4",{ // this will run just after the above one is executed
    x:-30,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
tl.from("h1",{
    y:30,
    opacity:0,
    // scale:0              // will start from 0px to actual size
})