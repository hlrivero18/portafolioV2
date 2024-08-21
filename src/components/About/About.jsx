"use client"
import AOS from "aos";
import 'aos/dist/aos.css';
import { Gabarito, IBM_Plex_Mono } from "next/font/google"
import {SiTypescript, SiNextdotjs, SiReact, SiJavascript, SiExpress, SiSequelize, SiPostgresql, SiNodedotjs, SiAdobephotoshop } from "react-icons/si";
import profile from '../../img/profile.jpg'
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
                <div className="h-full w-full">
                    <img src={profile.src} className="border-solid border-[#74985f] border-4 rounded-full mx-auto my-4 h-60 w-60 lg:border-none lg:h-80 lg:w-80 lg:rounded lg:m-0" alt="" />
                </div>

                <div className="p-5">
                    <h1 className="text-xl pb-4">Me llamo Hector Luis Rivero y soy...</h1>
                    <p>
                        desarrollador web, ágil, autodidacta y responsable,
                        y me apasiona resolver problemas utilizando las herramientas tecnológicas que
                        se nos presentan día a día, siempre con una visión dinámica para brindar la mejor
                        experiencia al cliente.
                    </p>
                    <p>
                        Actualmente, trabajo con tecnologías de front-end como React, Tailwind, Redux, Router y Next.js, y
                        en el back-end con Typescript, Express.js, Sequelize y PostgreSQL. Además,
                        manejo otras herramientas como Git, Scrum y Figma.
                    </p>
                    <p className="my-2">
                        Soft skills: resolucion de problemas, autocritica, gestion de tiempo, creatividad y trabajo en equipo.
                    </p>
                    <p>
                        Tech skills:
                        <span className="mt-3 text-3xl flex gap-3 justify-around">
                            <SiJavascript />
                            <SiReact />
                            <SiNextdotjs />
                            <SiTypescript />
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