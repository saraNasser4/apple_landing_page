import { navLinks } from '@/constants';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

function NavBar() {
    
  return (
    <header className='fixed top-0 left-0 right-0 bg-[#fff] dark:bg-[#000] z-50'>
        <nav className='py-2 flex justify-between items-center max-w-[1000px] mx-auto'>
            <div>
               <ThemeToggle />
            </div>

            <ul className='hidden md:flex justify-between w-full mx-8'>
                {navLinks.map(({ label }) => (
                    <li className={`cursor-pointer text-[12px] capitalize invert-25 hover:invert-0`} key={label}>{label}</li>
                ))}
            </ul>

            <div className='flex items-center'>
                {[{name: 'Search', url: '/search.svg'}, {name: 'Menu', url: '/menu.svg'}].map(obj=> (
                    <button key={obj.name} className={`${obj.name === 'Menu' ? 'invert-25 dark:invert-75 w-5 md:hidden': 'invert-75 dark:invert-35 text-amber-500'} mx-2 cursor-pointer`}>
                        <Image src={obj.url} alt={obj.name} width={25} height={25} />
                    </button>

                ))}
                
            </div>
        </nav>
    </header>
  ) 
}

export default NavBar;