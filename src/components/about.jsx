import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function About() {
  return (
   <div className='flex flex-row items-center justify-between h-1/2 w-[90vw]'>
    <img
      src="/pole.png"className='w-[30vw]'></img>
      <div className='flex flex-col items-center justify-center w-[30vw]'>
        <h1 className='text-4xl font-bold text-yellow-700'>O nama</h1>
        <p className='text-lg text-gray-700 mt-4'>  xxx  </p>
   </div>

          <img
      src="/pole.png"className='w-[30vw]'></img>
   </div>

  );
}

export default About;