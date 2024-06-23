"use client"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Card({ name, description, img, deployment }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <div data-aos="zoom-in" className='w-64 border-4 p-4 shadow-2xl m-2'>
            <a target="_blank" href={deployment}>
                <div className='m-auto w-32 h-32 grid place-content-center'>
                  <img className="mx-auto"  src={img} alt="" />  
                </div>
                
                <h1>{name}</h1>
                <p className='text-xs'>{description}</p>
            </a>

        </div>
    )
}