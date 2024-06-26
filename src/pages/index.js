
import style from './index.module.css'
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google"
import Start from '@/components/Start/Start';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';

const spaceGrotesk = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"]
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className={``}>
      <Start/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}
