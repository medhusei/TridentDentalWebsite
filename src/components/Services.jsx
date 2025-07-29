import React from 'react'
import {motion} from 'framer-motion'
import { FaSmileBeam, FaTooth, FaXRay } from 'react-icons/fa'
import { GiToothbrush } from 'react-icons/gi'

const services = [
    {
        icon: <FaTooth className='w-10 h-10 text-sky-500'/>,
        title: "Stomatološki pregled",
        desc: "Temeljit pregled zuba, desni i usne šupljine uz stručno savjetovanje, kako bismo na vrijeme otkrili i spriječili moguće probleme"
    },
    {
        icon: <GiToothbrush className='w-10 h-10 text-green-500'/>,
        title: "Profesionalno čišćenje zuba",
        desc: "Uklanjanje zubnog kamenca i naslaga ultrazvučnim aparatom, poliranje i osvježavanje osmijeha za dugotrajan osjećaj čistoće i svježine"
    },
      {
        icon: <FaSmileBeam className='w-10 h-10 text-yellow-300'/>,
        title: "Estetska stomatologija",
        desc: "Usluge izbjeljivanja zuba, korekcije oblika i boje, kompozitni i keramički radovi – sve za savršen osmijeh koji ostavlja utisak"
    },
      {
        icon: <FaXRay className='w-10 h-10 text-indigo-950'/>,
        title: "Digitalna dijagnostika",
        desc: "Uz RTG snimanje dobijate preciznu i brzu dijagnostiku, kao osnovu za tačno planiranje terapije"
    }
];

const Services = () => {

  return (
    <section id='usluge' className='scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-50'>
        <div className='container mx-auto px-4'>
             <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-teal-800 mb-4'>
                 Naše usluge
                </h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                  Kod nas ćete pronaći sve – od osnovne njege do estetskih i specijalističkih tretmana, uz savremenu opremu i stručno osoblje
                </p>
             </div>
             <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {services.map((service, index) =>(
                <motion.div key={index}
                className='bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-teal-100 hover:border-teal-600'
                whileHover={{scale: 1.05}}
                transition={{type: "spring", stiffness: 300}}>
                    <div className='flex items-center justfy-center mb-4'>
                        {service.icon}
                    </div>
                    <h3 className='text-lg font-semibold text-teal-800 mb-2 text-center'>
                        {service.title}
                    </h3>
                    <p className='text-gray-600 text-sm text-center'>
                        {service.desc}
                    </p>
                </motion.div>
              ))}
             </div>
        </div>
    </section>
  );
};

export default Services