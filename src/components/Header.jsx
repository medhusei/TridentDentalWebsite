import { Hospital, X, Menu, PhoneCall } from 'lucide-react';
import React, {useState} from 'react'

const navList = [
    { href: '#pocetna', label: 'Početna'},
    { href: '#usluge', label: 'Usluge'},
    { href: '#onama', label: 'O nama'},
    { href: '#savjeti', label: 'Savjeti'},
    { href: '#termin', label: 'Zakažite termin'},
    { href: '#kontakt', label: 'Kontakt'}
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (

    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <Hospital className="w-8 h-8 text-teal-800"/>
          <span className="text-xl font-bold text-teal-800">Stomatološka ordinacija TRIDENT</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-teal-800 font-medium">
            {navList.map((link)=>(
                <a href={link.href} key={link.href} className="hover:text-teal-600 transition text-sm">
                   {link.label}
                </a>
            ))}

        </nav>
        <div className="hidden md:flex items-center space-x-2">
            <PhoneCall className="text-teal-800"/>
             <a href="#termin" className="bg-teal-800 text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition text-sm">
                Zakažite termin
             </a>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="text-teal-800" /> : <Menu className="text-teal-800" />}
            </button>
        </div>
    </div>

{
    isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3 text-teal-800 font-medium">
            {navList.map((link)=>(
                <a href={link.href}
                key={link.href}
                className="block hover:text-teal-600 transition"
                onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                </a>
            ))}              
        </div>
    )}
    </header>    
  );
};

export default Header