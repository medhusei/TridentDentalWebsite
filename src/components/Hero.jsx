import React from 'react'
import hero from '../assets/hero.jpg'
import { CalendarCheck } from 'lucide-react'

const Hero = () => {
  return (
<section id='pocetna' className='scroll-m-20 bg-sky-50 py-16'>
    <div className='container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
    <div className='max-w-xl text-center lg:text-left space-y-6'>
      <h1 className='text-xl sm:text-4xl lg:text-6xl font-bold text-teal-800 leading-tight'>
        Brinemo o Vašem osmijehu, <br /> s ljubavlju i znanjem.
      </h1>   
      <p className='text-gray-700 text-sm lg:text-lg'>
        Posvećeni smo pružanju vrhunske stomatološke njege u prijatnoj atmosferi.
      </p>     
      <a href="#termin" className='inline-flex item-center bg-teal-800 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-teal-600 transition text-base font-medium'>
        <CalendarCheck className='w-5 h-5 mr-2'/>
        Zakažite termin
      </a>
    </div>
    <div className='flex justify-center'>
        <img src={hero} alt="stomatolog"  className='w-150 lg:w-[700px] lg:translate-x-[-40px] rounded-3xl' />
    </div>
    </div>
</section>
  );
};

export default Hero