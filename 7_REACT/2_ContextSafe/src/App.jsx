import { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react" ; 
import gsap from 'gsap';
import './App.css'

function App() {
  // CURSOR : -----------------------------------------------------
  const body = useRef() ; 
  const cursor = useRef() ; 
  useEffect(() => {
    if (body.current) {
      body.current.addEventListener("mousemove", (e)=>{
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    }
    return () => {
      // Cleanup to prevent memory leaks
      if (body.current) {
        body.current.removeEventListener("mousemove", (e)=>{
          gsap.to(cursor.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      }
    };
  }, []);


  // BASIC ANIMATION ON CLICK with CONTEXT SAFE--------------------------------------------------------------------
  //    ContextSafe only use them on onClick animations ! 
  const box = useRef() ; 

  const { contextSafe } = useGSAP() ;       // for saving memory consumption

  const animation = contextSafe( () => {
      gsap.killTweensOf(box.current);       // Kill any existing animations to reset
      gsap.set(box.current, { x: 0 , y : 0 , z : 0 , rotateX: 0, rotateY: 0, rotateZ: 0});      // Reset position to the starting point

      // / ANIMATION DESIGN 1 :
      // const tl = gsap.timeline() ; 
      // tl.to(box.current,{
      //   x:300,
      //   duration:1,
      //   repeat:1,
      //   yoyo:true
      // });
      // tl.to(box.current,{
      //   x:-300,
      //   duration:1,
      //   repeat:1,
      //   yoyo:true 
      // }) ; 

      // ANIMATION DESIGN 2 :
      var tl = gsap.timeline() ; 
      tl.to(box.current,{
        rotateY: -360,
        rotateX:360,
        rotateZ:360,
        duration: 1,
        scale: 1.2, // Add a slight scale effect
        ease: "power2.out",
        repeat:1,
        x:300,
        yoyo:true,
      })
      tl.to(box.current,{
        rotateY: -360,
        rotateX:360,
        rotateZ:360,
        duration: 1,
        scale: 1.2, // Add a slight scale effect
        ease: "power2.out",
        repeat:1,
        x:-300,
        yoyo:true,
      })
  }) ;
 
  // ELSE JUST USE NORMAL GSAP
  const button = useRef(); 
  useGSAP(() => {
    gsap.to(button.current, {
      rotateY: 360,
      delay: 0.5,
      duration: 1,
      scale: 1.2, // Add a slight scale effect
      ease: "power2.out",
      repeat:1,
      yoyo:true
    });
    gsap.to(box.current,{
      rotateY: -360,
      rotateX:360,
      rotateZ:360,
      delay: 0.5,
      duration: 1,
      scale: 1.2, // Add a slight scale effect
      ease: "power2.out",
      repeat:1,
      yoyo:true     
    })
  });
  

  return (
    <>
      <div ref={body} className='container'>
        <div ref={cursor} className="cursor"></div>


        <button ref={button} onClick={animation}>CLICK ME</button>
        <div ref={box} className='box'>
          <img src="/logo.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default App
