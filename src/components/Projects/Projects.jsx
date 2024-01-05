import boho from './logos/boho.png'
import pokeapp from './logos/pokeapp.png'
import calendar from './logos/calendario.png'
import { Gabarito, IBM_Plex_Mono } from "next/font/google"
import Card from './card/card'

const gabarito = Gabarito({
    weight: ["400"],
    subsets: ["latin"]
})

export default function Projects() {
    const projects = [
        {
            name: "PokeApp",
            img: `${pokeapp.src}`,
            description: "PokeApp es una SPA(single page aplication), desarrollada con ReactJs, ExpressJs, Sequelize y PostgreSQL.",
            deployment: "https://pokemon-omega-three.vercel.app/"
        },
        {
            name: "BOHO",
            img: `${boho.src}`,
            description: "BOHO es un sitio web de compra/venta de tickets para eventos recreativos, desarrollado con ReactJs, Tailwind-CSS, ExpressJs, Sequelize y PostgreSQL.",
            deployment: "https://pf-ptb-grupo-06.vercel.app/"
        },
        {
            name: 'Calculadora de Edad',
            img: `${calendar.src}`,
            description: "Es un sitio Web donde proporcionas tu fecha de nacimiento y como resultado conoces cuantos años, meses y dias tienes.",
            deployment:"https://webedad.000webhostapp.com/webedad/index.html"
        }
    ]
    return (
        <div id='proyectos' className={`${gabarito.className} p-10`}>
            <h1 className='text-3xl'>Proyectos</h1>
            <div className="p-10 flex flex-wrap justify-center justify-around">
                {projects.map((p, i)=>{
                    return(
                       <Card 
                       name={p.name}
                       description={p.description}
                       img={p.img}
                       deployment={p.deployment}
                       key={i}/> 
                    )
                })}
            </div>
        </div>

    )
}