
import { Inter } from 'next/font/google'
import style from './start.module.css'
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google"
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoGmail } from "react-icons/bi";
import { SiTelegram } from "react-icons/si";
import preview from '../../img/vistaPrevia.png'

const spaceGrotesk = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"]
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Start() {
  return (
    <div id='inicio' className={`${style.bg} h-screen p-20 grid gap-8 place-content-center text-slate-50`}>
      {/* <div className={`${style.space}`}></div> */}
      <div className={`${spaceGrotesk.className} md:text-6xl text-5xl text-center md:w-[50rem] animate-fade-up`}>
        <h1>Hey!, Mi nombre es <span className='text-[#e22e09]'>Hector!</span></h1>
      </div>
      <div>
        <p className={`${ibmPlexMono.className} ${style.description} text-xl text-center`}>Full Stack Web Developer</p>
      </div>
      <div className="w-full flex justify-around text-4xl mt-2 text-gray-200 animate-fade-down">
        <a className="backdrop-blur-md bg-white/30 hover:bg-sky-500 rounded-full p-1" href="https://t.me/Mrsalitre" target="_blank">
          <SiTelegram />
        </a>
        <a className="backdrop-blur-md bg-white/30 hover:bg-black rounded-full p-1" href="https://github.com/hlrivero18" target="_blank">
          <BiLogoGithub />
        </a>
        <a className="backdrop-blur-md bg-white/30 hover:bg-blue-900 rounded-full p-1" href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" target="_blank">
          <BiLogoLinkedinSquare />
        </a>
      </div>
    </div>
  )
}