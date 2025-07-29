import React, {useState} from 'react'
import { GiToothbrush, GiWaterDrop } from 'react-icons/gi';
import { FaTooth, FaSmile, FaShieldAlt } from 'react-icons/fa'
import { button } from 'framer-motion/client';

const Tips = () => {

const [activeTip, setActiveTip] = useState(0);

const tips = [
    {
        title: 'Ispravno pranje zuba',
        content: 'Pranje zuba treba trajati najmanje 2 minute, dva puta dnevno. Ne zaboravi četkati i jezik!',
        icon: <GiToothbrush  className='w-8 h-8 text-sky-500'/>
    },
     {
        title: 'Sprečavanje stvaranja kamenca',
        content: 'Redovno čišćenje koncem i posjete stomatologu sprječavaju nakupljanje kamenca i upale.',
        icon: <FaTooth  className='w-8 h-8 text-gray-900'/>
    },
     {
        title: 'Briga o desnima',
        content: 'Desni su temelj zdravog osmijeha – nježno ih masiraj prilikom pranja i obrati pažnju na krvarenje.',
        icon: <GiWaterDrop  className='w-8 h-8 text-red-500'/>
    },
    {
        title: 'Zaštita zuba',
        content: 'Koristi štitnik za zube pri sportskim aktivnostima i izbjegavaj otvaranje stvari zubima.',
        icon: <FaShieldAlt  className='w-8 h-8 text-emerald-500'/>
    },
     {
        title: 'Redovni pregledi',
        content: 'Ne čekaj bol! Posjeta zubaru svakih 6 mjeseci može spriječiti veće probleme i nepotrebne troškove.',
        icon: <FaSmile  className='w-8 h-8 text-yellow-300'/>
    }
]


  return (
    <section id='savjeti' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
       <div className='text-center mb-12'>
        <h2 className='text-3xl md_text-4xl font-bold text-teal-800 mb-3'>
          Savjeti
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
         Izdvojili smo nekoliko jednostavnih, ali važnih preporuka koje mogu učiniti veliku razliku za tvoje zube i desni.
        </p>
       </div>

<div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
   {tips.map((tip, index)=>(
    <button key={index} onClick={()=> setActiveTip(index)} className={`p-4 rounded-xl transition-all duration-300 flex flex-col 
    items-center ${activeTip === index ? 'bg-white shadow-lg border-b-4 border-teal-400':'bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-teal-100 hover:border-teal-600'}`}>

<div className='mb-2'>
    {tip.icon}
</div>
<h3 className='font-medium text-gray-800 text.sm md:text-base'>
    {tip.title}
</h3>
    </button>
   ))}

</div>

<div className='bg-gradient-to-r from-teal-100 to-teal-700 rounded-2xl p-8 shadow-sm'>
   <div className='flex flex-col md:flex-row items-center gap-6'>
     <div className='flex-shrink-0 bg-white p-6 rounded-xl shadow-md'>
        {tips[activeTip].icon}
     </div>
     <div>
        <h3 className='text-2xl font-bold text-gray-800 mb-3'>
         {tips[activeTip].title}
        </h3>
        <p className='text-gray-800 text-lg leading-relaxed'>
         {tips[activeTip].content}
        </p>
     </div>
   </div>
</div>

{/*za tačke*/}
<div className='mt-8 flex justify-center'>
    <div className='flex space-x-2'>
        {tips.map((_, index)=>(
            <button
            key={index}
            onClick={()=> setActiveTip(index)}
            className={`w-3 h-3 rounded-full transition-all ${activeTip === index ? 'bg-teal-500 w-6' : 'bg-gray-300'}`}
            aria-label={`Idi na savjet ${index+1}`} //za čitače ekrana
            ></button>
        ))}
    </div>
</div>

    </section>
  )
}

export default Tips