"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import img1 from "../../../public/images/Banner/WEB-DEV-Recovered.webp"
import img2 from "../../../public/images/Banner/GRAPHIC-DESIGN-COURSE.png"
import img3 from "../../../public/images/Banner/UI-UX-Recovered.webp"


type Seminar = {
    id: string
    title: string
    date: string
    description: string
    image: StaticImageData
}

const seminars: Seminar[] = [
    {
        id: "/courses/web-development-bootcamp",
        title: "",
        date: "2025-07-15",
        description: "Join our expert-led seminar on branding, Adobe tools, and design psychology.",
        image: img1,
    },
    {
        id: "/courses/graphic-design-course",
        title: "Mastering Graphic Design",
        date: "2025-08-01",
        description: "Learn MERN stack development, deployment & real-world project building.",
        image: img2,
    },
    {
        id: "3",
        title: "UI/UX Seminar for Beginners",
        date: "2025-09-10",
        description: "Discover wireframes, user flows, and hands-on Figma design with real-time examples.",
        image: img3,
    },
]

export default function HeroSlider() {
    return (
        <div className="relative w-full">
            <Swiper
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 5000 }}
                loop
                className="w-full  h-[25vh] md:h-[30vh] lg:h-[80vh]"
            >
                {seminars.map((seminar) => (
                    <SwiperSlide key={seminar.id}>
                        <div className="relative w-full h-full ">
                            {/* Background Image */}
                            <Image
                                src={seminar.image}
                                alt={seminar.title}
                                fill
                                className="object-center bg-cover "
                                priority
                            />

                            {/* Overlay (don't remove this!) */}
                            <div className="absolute inset-0 bg-blend-overlay bg-black/10  z-10" />

                           


                            <Link
                                className="absolute z-20  flex items-center justify-center text-center text-white px-4 top-5 right-1 md:mb-0"
                                href={`${seminar.id}`}>
                                <button >
                                    <span className=" px-2 py-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors rounded text-white font-medium text-sm md:text-2xl">
                                        Book seminar
                                    </span>
                                </button>
                            </Link>


                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="custom-prev absolute bg-black m-2 top-1/2 border  left-2 md:left-10 z-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors  text-white font-medium  p-2 rounded-full shadow">
                <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className="custom-next absolute bg-black m-2 top-1/2 border  right-2 md:right-10 z-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors  text-white font-medium  p-2 rounded-full shadow">
                <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}
