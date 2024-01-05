import { Gabarito } from "next/font/google"
import { SiWhatsapp, SiInstagram, SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import style from "./contact.module.css"
const gabarito = Gabarito({
    weight: ["400"],
    subsets: ["latin"]
})

export default function Contact() {
    return (
        <div id="contacto" className={`${gabarito.className} ${style.container} m-auto p-10 md:px-32 text-gray-100 rounded-t-full`}>
            <div>
                
            </div>
            <h1 className="text-3xl text-center border-b-4 border-up m-auto">Contactame!</h1>
            <div className="text-xl md:text-5xl flex justify-around pt-10">
                <a href="https://wa.me/qr/3X3SU5NRGLJEG1" className="hover:bg-green-500 rounded-full p-4 backdrop-blur-md bg-white/30 hover:text-gray-100" target="_blank">
                    <SiWhatsapp />
                </a>
                <a href="https://t.me/Mrsalitre" target="_blank" className="backdrop-blur-md bg-white/30 hover:bg-sky-500 rounded-full p-4 hover:text-gray-100">
                    <SiTelegram />
                </a>
                <a href="https://www.instagram.com/hlrivero18/" className="backdrop-blur-md bg-white/30 hover: hover:bg-gradient-to-tr from-yellow-500 via-orange-600 to-fuchsia-700 rounded-full p-4" target="_blank">
                    <SiInstagram />
                </a>
                <a href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" className="backdrop-blur-md bg-white/30 hover:text-gray-100 hover:bg-blue-900 rounded-full p-4" target="_blank">
                    <SiLinkedin />
                </a>
                <a href="https://github.com/hlrivero18" className="backdrop-blur-md bg-white/30 hover:text-gray-100 hover:bg-black rounded-full p-4" target="_blank">
                    <SiGithub />
                </a>
            </div>
        </div>
    )
}