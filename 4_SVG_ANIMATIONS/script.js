var initialPath = `M 0 100 Q 200 100 400 100` // we only have to change the value '10' which will give us the wavy effect 
var finalPath = `M 0 100 Q 200 100 400 100`

var string = document.querySelector(".string");
string.addEventListener("mousemove",function(dets){ 
    console.log(dets) ; // wil return mouse details
    // DETS : is an object : DETS.X, DETS.Y

    path = `M 0 100 Q ${dets.x} ${dets.y} 400 100`,
    gsap.to("svg path", { // for changing the attribute
        attr : {d:path},
        duration : 0.2,
        ease:"power3.out"
    })
}) ; 

string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:0.5,
        // ease:"bounce.out" 
        ease:"elastic.out(1,0.2)"
    })
})