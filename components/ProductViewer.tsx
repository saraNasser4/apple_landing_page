'use client';
import useMacbookStore from '@/store'
import { Box, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';

function ProductViewer() {
    const { color, setColor, scale, setScale } = useMacbookStore();
  return (
    <section className='block'>
      <div className='max-w-[1000px] mx-auto px-2 lg:px-0'>
        <span className='text-xl sm:text-2xl md:text-3xl font-semibold'>Take a closer look.</span>
        <h2>Render Canvas</h2>

        <Canvas className='my-20' camera={{ position: [0, 2, 5], fov: 20, near: 0.1, far: 100}}>
          <Box position={[0, 0, 0]} material-color={color} scale={20 * scale}/>
          <OrbitControls enableZoom={false} />
        </Canvas>
        
        <p className='text-center'>MacbookPro {scale === 0.06 ? '14' : '16'}&ldquo; in {color === '#2e2c2e' ? 'Black' : 'White'}</p>
        <div className='flex justify-evenly my-6 items-center max-w-[500px] mx-auto'>
          <div className='parentCont'>
            <div onClick={()=> setColor('#adb5bd')} className={`${clsx('bg-neutral-300', color === '#adb5bd' && 'active')} childCont`}/>
            <div onClick={()=> setColor('#2e2c2e')} className={`${clsx('bg-neutral-900', color === '#2e2c2e' && 'active')} childCont`}/>
            <div />
          
          </div>
          <div className='parentCont pr-3'>
              <div onClick={()=> setScale(0.06)} className={`${clsx(scale === 0.06 ? 'bg-white [&>*]:text-black' : 'bg-transparen text-white')} rounded-full cursor-pointer`}><p className='text-white p-1.5 rounded-full'>14&ldquo;</p></div>
              <div onClick={()=> setScale(0.08)} className={`${clsx(scale === 0.08 ? 'bg-white [&>*]:text-black' : 'bg-transparen text-white')} rounded-full cursor-pointer`}><p className='text-white p-1.5 rounded-full'>16&ldquo;</p></div>
          </div>
        </div>
      </div>
    </section>

    
    
    
  )
}

export default ProductViewer