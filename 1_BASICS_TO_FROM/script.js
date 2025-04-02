// TO : Go to that direction
gsap.to("#box1",{
    x:170, // move in x axis 200 px
    y:170,
    duration:2,
    delay:1,

    rotate:360,
    scale:2,
    repeat:Infinity,
    yoyo:true
}) ; 
//  FROM : Come from x = 170 and y = 170 to its default position
gsap.from("#box2",{
    x:170, // move in x axis 200 px
    y:170,
    duration:2,
    delay:1,

    rotate:360,
    scale:2
}) ; 


gsap.from("#box3",{
    opacity:0,
    duration:1,
    delay:1,
    y:20
});
gsap.from("h2",{
    opacity:0,
    duration:1,
    delay:1.3, // let the box animation above run first then start this animation
    y:20,
    stagger:0.3 // -VALUE WILL REVERSE IT 
})
