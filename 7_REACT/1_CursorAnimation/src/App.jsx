import { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react" ; 
import gsap from 'gsap';

import './App.css'

function App() {
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


  return (
    <>
      <div ref={body} className='container'>
        <div ref={cursor} className="cursor"></div>
      </div>
    </>
  )
}

export default App
