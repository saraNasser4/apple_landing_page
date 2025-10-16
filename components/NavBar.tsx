import { navLinks } from '@/constants'
import Image from 'next/image'

function NavBar() {
    const animationStyles = 'cursor-pointer transition-all duration-300 hover:-translate-y-0.5'
  return (
    <header className='my-2 mx-4'>
        <nav className='flex justify-between items-center max-w-[1000px] mx-auto'>
            <div>
                <button className={`${animationStyles}`}>
                    <Image src="/logo.svg" alt="Logo" width={25} height={25} className='invert-25 hover:invert-0'/>
                </button>
            </div>

            <ul className='hidden md:flex justify-between w-full mx-8'>
                {navLinks.map(({ label }) => (
                    <li className={`${animationStyles} text-[12px] capitalize invert-25 hover:invert-0`} key={label}>{label}</li>
                ))}
            </ul>

            <div className='flex items-center'>
                {[{name: 'Search', url: '/search.svg'}, {name: 'Menu', url: '/menu.svg'}].map(obj=> (
                    <button key={obj.name} className={`${obj.name === 'Menu' ? 'invert-75 w-5 md:hidden': ''} mx-2 cursor-pointer`}>
                        <Image src={obj.url} alt={obj.name} width={25} height={25} />
                    </button>

                ))}
                
            </div>
        </nav>
    </header>
  ) 
}

export default NavBar