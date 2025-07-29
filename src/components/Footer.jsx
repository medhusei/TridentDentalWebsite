import { a, li, text } from 'framer-motion/client';
import React from 'react'
import { FaFacebook, FaInstagram, FaMapMarkedAlt, FaPhone, FaPhoneVolume, FaRegClock, FaTelegram, FaTooth, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md';
import ordinacijaImg from '../assets/ordinacija.jpg'
import { FaHandshakeSimple, FaLocationDot, FaLocationPin, FaPhoneSlash } from 'react-icons/fa6';

const socialLinks = [
    {icon: <FaInstagram className="text-xl" />, href: 'https://www.instagram.com/'},
    {icon: <FaFacebook className="text-xl" />, href: 'https://www.facebook.com/?locale=hr_HR'},
    {icon: <FaLocationDot className="text-xl" />, href: 'https://maps.app.goo.gl/aBhmYtsPWQx2fXZm7' }
];

const workingHours = [
    {day: 'Ponedjeljak - Petak', time: '08:00 h - 16:00 h'},
    {day: 'Subota', time: '10:00 h - 15:00 h'},
    {day: 'Nedjelja', time: 'Zatvoreno'}
];

const contactInfo = [
    {
        icon: <FaPhone className='mr-4 text-gray-700' />,
        text: <a href="#" className='hover:text-teal-400 transition-colors'>
            +387 62 000 000
        </a>
     },
     {
        icon: <MdOutlineEmail className='mr-4 text-gray-700' />,
        text: <a href="#" className='hover:text-teal-400 transition-colors'>
            trident.stomatologija@gmail.com
        </a>
     },
     {
        icon: <FaMapMarkedAlt className='mr-4 text-gray-700' />,
        text: <a href="https://maps.app.goo.gl/aBhmYtsPWQx2fXZm7" target="_blank" rel="noopener noreferrer" className='hover:text-teal-400 transition-colors'>Adresa ordinacije, 72000 Zenica, Bosna i Hercegovina</a>
     }
];

const Footer = () => {
  return (
    <footer id="kontakt" className='bg-white text-gray-700 pt-16 pb-12 relative overflow-hidden'>
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-cover opacity-20'></div>
          <div className='container mx-auto px-6 relative z-10'>         
             <div className='flex flex-col items-center mb-14'>
                <div className='flex items-center mb-6'>
                    <div className='bg-white/20 p-3 rounded-full mr-4'>
                    <FaTooth className='text-2xl text-teal-800' />
                    </div>
                    <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-400'>
                        TRIDENT
                    </h2>
                </div>
                <div className='flex space-x-6 mb-8'>
                    {
                        socialLinks.map((link, index) => (
                            <a 
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1'>
                             {link.icon}
                            </a>
                        ))}
                </div>
            </div> 
            <div className='grid grid-col-1 lg:grid-cols-3 gap-8 mb-12'>
              <div className='bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-teal-400 transition-colors'>
              <h3 className='text-xl font-semibold mb-5 flex items-center'>
                <FaRegClock className='mr-3 text-gray-700' />Radno vrijeme:
              </h3>
              <ul className='space-y-3'>
                {workingHours.map((item, index) => (
                    <li key={index} className='flex justify-between'>
                        <span className='text-gray-700'>{item.day}</span>
                        <span>{item.time}</span>
                    </li>
                ))}
                    <li className='pt-3 mt-3 border-white/10 text-gray-700 font medium'>
                        Praznicima ne radimo
                    </li>
              </ul>
              </div>
              <div className='bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-teal-400 transition-colors'>
                 <h3 className='text-xl font-semibold mb-5 flex items-center'>
                    <FaHandshakeSimple className='mr-3 text-gray-700'/>
                    Kontaktirajte nas
                 </h3>
                 <ul className='space-y-4'>
                    {contactInfo.map((item, index) => (
                      <li key={index} className='flex items-start'>
                         {item.icon}
                         {item.text}
                    </li>
                    ))}                    
                 </ul>
              </div>
              <div className='bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-teal-400 transition-colors'>
                 <a href="https://maps.app.goo.gl/aBhmYtsPWQx2fXZm7" target="_blank" rel="noopener noreferrer">
                 <img src={ordinacijaImg} alt="Lokacija" className='w-80 lg:w-[420px] rounded shadow-md' />
                 </a>
              </div>
              <div className='pt-8 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-700 text-sm mb-3 md:mb-0'>
                    &copy; {new Date().getFullYear()} TRIDENT Stomatološka Ordinacija
                </p>
                   {/*dodati link za politiku privatnosti*/}
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-sky-300 text-sm transition-colors'>
                    Politika privatnosti
                    </a>
              </div>
            </div> 
          </div>        
    </footer>
  )
}

export default Footer