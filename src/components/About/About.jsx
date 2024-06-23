"use client"
import AOS from "aos";
import 'aos/dist/aos.css';
import { Gabarito, IBM_Plex_Mono } from "next/font/google"
import { SiNextdotjs, SiReact, SiJavascript, SiExpress, SiSequelize, SiPostgresql, SiNodedotjs, SiAdobephotoshop } from "react-icons/si";
import profile from '../../img/profile.png'
import { useEffect } from "react";

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["400"],
    subsets: ["latin"]
})

const gabarito = Gabarito({
    weight: ["400"],
    subsets: ["latin"]
})

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div id="acerca de mi" data-aos="fade-up" className={`${gabarito.className} p-5 md:px-28 md:py-20`}>
            <div className={`text-sm border-4 rounded-md shadow-2xl shadow-[#25686e] lg:flex`}>
                <img src={profile.src} className="border-4 rounded-full mx-auto my-4 h-40 w-40 lg:w-56 lg:h-auto lg:rounded-none lg:m-0" alt="" />
                <div className="p-5">
                    <h1 className="text-xl pb-4">Me llamo Hector Luis Rivero y soy...</h1>
                    <p>
                        Desarollador Javascript, agil, autodidacta y responsable, me gusta resolver problemas
                        usando las herramientas tecnologicas que se nos presentan dia a dia, siempre con una
                        vision dinamica para la mejor experiencia del cliente.
                    </p>
                    <p>
                        Actualmente trabajo con tecnologias del front-end como React, Tailwind, Redux,
                        Router y NextJs, y en el back-end con ExpressJs, Sequelize y PosgreSQL. Ademas de otras
                        herramientas como Git, scrum y figma.
                    </p>
                    <p className="my-2">
                        Soft skills: resolucion de problemas, autocritica, gestion de tiempo, creatividad y trabajo en equipo.
                    </p>
                    <p>
                        tech skills:
                        <span className="mt-3 text-3xl flex gap-2 justify-around">
                            <SiJavascript />
                            <SiReact />
                            <SiNextdotjs />
                            <SiNodedotjs />
                            <SiExpress />
                            <SiSequelize />
                            <SiPostgresql />
                            <SiAdobephotoshop />
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}