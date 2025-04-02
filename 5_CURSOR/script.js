var main = document.querySelector(".body") ;
var cursor = document.querySelector(".cursor") ; 
var box = document.querySelector(".box") ; 

// inside
box.addEventListener("mousemove",function(dets){
    console.log("Moved") ; 
    gsap.to(".cursor",{
        x : `${dets.x}`,
        y : `${dets.y}`,
        duration: 0.2 ,
        delay : 0 ,
        opacity:1,
        ease:"back.out" , 
    });
});

// add
box.addEventListener("mouseenter", function(dets){
    gsap.to(".cursor",{
        opacity:1,
        duration:0
    })
})
// leave
box.addEventListener("mouseleave", function(dets){
    gsap.to(".cursor",{
        opacity :0,
    })
});