'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';


function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(()=> {
        if(videoRef.current) videoRef.current.playbackRate = 2
    },[]);

  return (
    <section className='bg-[#000] py-20 m-0'>
        <h1 className='text-[#f2f2f7]'>MacBook Pro</h1>
        <Image src={'/title.png'} width={800} height={80} alt='Title' />
        <video className='md:max-w-[800px]' ref={videoRef} src={'/videos/hero.mp4'} autoPlay muted playsInline />
        <button className='bg-[#0a84ff] text-[#f2f2f2] px-3 lg:px-6 py-1 lg:py-2 text-xl lg:text-2xl rounded-full font-semibold my-4 cursor-pointer transition-all hover:bg-[#0071e3]'>Buy</button>
        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero