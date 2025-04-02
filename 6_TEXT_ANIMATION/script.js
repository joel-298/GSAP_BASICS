var h1 = document.querySelector("h1");                                          // <h1>JOEL MATTHEW</h1>
var h1Text = h1.textContent.trim();                                             // JOEL MATTHEW

h1.innerHTML = "";                                                              // Clear existing text from html


var splittedText = h1Text.split("") ;                                           // ["J","O","E"----]
var clutter = "" ;                                                              

const halfvalue = Math.floor(splittedText.length/2) ;                           // Math.floor converts the decimal value to Integer only
for(let i = 0 ; i <= halfvalue ; i++) {
    clutter += `<span class="a">${splittedText[i]}</span>` ;
}
for(let i = halfvalue + 1 ; i < splittedText.length ; i++ ) {
    clutter += `<span class="b">${splittedText[i]}</span>` ;
}
console.log(clutter);                                                           // <span class="a">J</span><span class="a">O</span><span class="a">E</span><span class="a">L</span><span class="a"> </span><span class="a">M</span><span class="a">A</span><span class="b">T</span><span class="b">T</span><span class="b">H</span><span class="b">E</span><span class="b">W</span>
h1.innerHTML = clutter ; 
console.log(h1.innerHTML);                                                      // " " " " " " - - - -- - - - - - - --  and so on


gsap.from(".a", {
    y: 100, // Span in as inline element therefore in here transform Y and translate Y property will not work, so convert it to inline block
    opacity: 0, 
    stagger: 0.1,
    // ease: "bounce"
});
gsap.from(".b", {
    y: 100, // Span in as inline element therefore in here transform Y and translate Y property will not work, so convert it to inline block
    opacity: 0, 
    stagger: -0.1,
    // ease: "bounce"
});
