import { Gabarito } from 'next/font/google';
import style from './Navbar.module.css';
import logo from '../../img/logo.png'

const gabarito = Gabarito({
    weight: ["400"],
    subsets: ["latin"]
})

export default function Navbar() {
    const li = ['Acerca de mi', 'Proyectos', 'Contacto']
    return (
        <div className={`${style.nav} z-50`}>
            <nav className={`${gabarito.className} px-4 z-50 w-full h-16 bg-black text-white flex items-center justify-between`}>

                <div className={` h-full m-0 py-1`}>
                    <a href='#inicio'>
                        <img src={logo.src} alt="logo de la pagina" className='h-full' />
                    </a>
                </div>

                <ul className="flex">
                    {
                        li.map((l, i) => {
                            return (
                                <li key={i} className={`${style.sub} p-2`}>
                                    <a href={`#${l.toLowerCase()}`}>
                                        {l}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className={`${style.rotatingBar}`}></div>
        </div>

    )
}