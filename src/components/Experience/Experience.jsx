"use client"
import { Gabarito, IBM_Plex_Mono } from "next/font/google"
import { FaTools } from "react-icons/fa";
import { TbNeedleThread } from "react-icons/tb";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const gabarito = Gabarito({
    weight: ["400"],
    subsets: ["latin"]
})
const ibmPlexMono = IBM_Plex_Mono({
    weight: ["400"],
    subsets: ["latin"]
})

export default function Experience() {
    const experiencia = [
        {
            animacion: 'fade-right',
            icon: <FaTools className="inline"/>,
            duracion: 'Jun 2015 - actualidad',
            ocupacion: 'Técnico en reparación de Computadoras y Celulares.',
            habilidades: ['Conocimientos técnicos', 'Resolución de problemas', 'Gestión del tiempo', 'Adaptabilidad y aprendizaje rápido', 'Atención al cliente'],
            descripcion: 'Esta fue mi primera experiencia laboral y mi primer acercamiento a la tecnologia y la electronica.'
        },
        {
            animacion: 'fade-left',
            icon: <TbNeedleThread className="inline"/>, 
            duracion: 'May-2021 - actualidad',
            ocupacion: 'Costurero.',
            habilidades: ['Atención al detalle', 'Resolución de problemas', 'Gestión del tiempo', 'Adaptabilidad y aprendizaje rápido'],
            descripcion: 'Como costurero aprendí a adaptarme facilmente a los nuevos desafios de un taller textil y gestionar los proyectos para entregar todo en tiempo y forma.'
        }
    ]
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <div className={`${gabarito.className} bg-[#1e141f] p-10 border-t-8 border-[#a08ca2]`}>
            <h1 className="text-3xl text-gray-50 text-center border-b-4 border-[#6c626d] pb-2">Experiencia</h1>
            <div className="flex items-center flex-col">
                {experiencia.map((e, i) => {
                    return (
                        <div key={i} data-aos="fade-up" className="shadow-2xl backdrop-hue-rotate-60 rounded-lg text-gray-300 m-5 p-4 w-80 border-4 border-[#6c626d]">
                            <h3 className="text-lg">{e.ocupacion} {e.icon}</h3>
                            <p className="opacity-50">{e.duracion}</p>
                            <p className="text-sm">{e.descripcion}</p>
                            <h4 className="text-sm py-2">Hablidades:</h4>
                            <ul className="text-sm list-disc px-3">
                                {e.habilidades.map((h) => { return <li>{h}.</li> })}
                            </ul>
                            {/* <p>{e.habilidades.map((h) =>{return <span>{h}, </span>})}.</p> */}
                        </div>
                    )
                })}
            </div>

        </div>
    )
} 