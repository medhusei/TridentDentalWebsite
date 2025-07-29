import React from 'react'
import aboutImg from '../assets/about.jpg'
import { FaUserMd } from 'react-icons/fa'

const About = () => {
  return (
  <section id='onama' className='py-20 scroll-mt-20 bg-sky-50'> 
    <div className='container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12'>
      
      <div className='w-full lg:w-1/2 flex justify-center'>
        <img src={aboutImg} alt="O nama" className='w-80 lg:w-[420px] rounded-full shadow-md' />
      </div>

      <div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'>
        <div className='flex items-center justify-center lg:justify-start space-x-2'>
            <FaUserMd className='text-gray-700 w-7 h-7' />
            <h2 className='text-3xl font-bold text-teal-800'>
                Naša priča
            </h2>
        </div>
        <p className='text-gray-700 text-lg leading-relaxed'>
            Iza naše ordinacije stoji porodična priča i zajednička strast prema stomatologiji. 
            Naši doktori su udružili znanje, iskustvo i energiju kako bi stvorili prostor 
            u kojem se pacijenti osjećaju sigurno, ugodno i u potpunosti zbrinuto. 
        </p>
        <p className='text-gray-700 text-lg leading-relaxed'>
            Stručnost, predanost i stalna edukacija su temelj svega što radimo. 
            Naša ordinacija opremljena je savremenom tehnologijom koja prati najviše 
            standarde današnje stomatologije - jer vjerujemo da vrhunska njega počinje 
            kombinacijom znanja, opreme i iskrene brige.
        </p>
        <p className='text-gray-700 text-lg leading-relaxed'>
            Vjerujemo da pravi odnos između doktora i pacijenta počinje povjerenjem, a završava zdravim, sretnim osmijehom.
        </p>
      </div>

    </div>
 </section> 
  );
};

export default About