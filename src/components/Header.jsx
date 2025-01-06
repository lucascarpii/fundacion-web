import { useState } from 'react';
import { motion } from 'motion/react';
import { MenuButton } from './MenuButton';
import { ArrowRightIcon } from '../icons/ArrowRight';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'Colegio', href: '/colegio' },
    { label: 'Isei', href: '/isei' },
    { label: 'Deporte', href: '/deporte' },
    { label: 'Comunicación', href: '/comunicacion' },
    { label: 'Comunidad', href: '/comunidad' },
    { label: 'Mediación', href: '/mediacion' },
    { label: 'Kinesiologia', href: '/kinesiologia' },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },

    },
  };

  return (
    <>
      <nav className="absolute inset-0 z-20 h-fit font-red-hat">
        <div className={`flex items-center justify-between h-[90px] overflow-hidden max-w-screen-xl mx-auto px-10 2xl:px-0 text-white`}>
          <img className="w-12 object-cover" src="logo_blanco.png" alt="Logo Blanco" />

          <MenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="lg:hidden cursor-pointer"
            color='#fff'
          />

          <ul className="hidden lg:flex gap-4 text-sm items-center">
            {navLinks.map((link) => (
              <li
                className="relative tracking-widest"
                key={link.label}
              >
                <motion.a
                  href={link.href}
                  className="w-full relative cursor-pointer px-3 py-2.5"
                  whileHover="hover"
                >
                  {link.label}
                  <motion.span
                    className="absolute left-0 bottom-0 z-50 h-[2px] w-full bg-white"
                    variants={{
                      hover: { scaleX: 1 },
                    }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          <button className="w-36 tracking-widest hidden lg:block text-xs font-semibold uppercase border-2 hover:bg-isei-blue hover:border-transparent transition-all duration-200 text-white pt-3 pb-[11px] px-3">
            Me interesa
          </button>

        </div>
      </nav>
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`lg:hidden fixed top-0 z-50 flex flex-col w-full right-0 bg-white ${isOpen ? 'h-dvh' : 'h-[0px] transition-all  delay-500'}`}
      >
        <div className='flex items-center justify-between min-h-[90px] px-10'>
          <img className="w-12 object-cover" src="logo_blanco.png" alt="Logo Blanco" />
          <MenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="cursor-pointer"
          />
        </div>

        <ul className={`p-6 h-full ${!isOpen && 'hidden'}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={toggleMenu}>
              <li className="py-6 border-b hover:text-isei-blue cursor-pointer flex justify-between items-center">
                {link.label}
                <ArrowRightIcon className='size-5' />
              </li>
            </a>
          ))}
        </ul>

        <div className={`px-6 pb-6 ${!isOpen && 'hidden'}`}>
          <button className='w-full border-2 border-isei-blue text-isei-blue hover:bg-isei-blue hover:text-white transition-colors duration-200 shadow-md uppercase text-xs font-semibold pb-2.5 pt-3'>
            Me interesa
          </button>
        </div>
      </motion.nav>
    </>
  );
}