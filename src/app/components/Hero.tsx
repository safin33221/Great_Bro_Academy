"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import img1 from "../../../public/images/seminar-1.jpg"
import img2 from "../../../public/images/seminar-2.jpg"
import img3 from "../../../public/images/seminar-1.jpg"
import PrimaryButton from "./common/PrimaryButton"

type Seminar = {
    id: string
    title: string
    date: string
    description: string
    image: StaticImageData
}

const seminars: Seminar[] = [
    {
        id: "1",
        title: "Mastering Graphic Design",
        date: "2025-07-15",
        description: "Join our expert-led seminar on branding, Adobe tools, and design psychology.",
        image: img1,
    },
    {
        id: "2",
        title: "Modern Web Development",
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
                className="w-full h-[90vh]"
            >
                {seminars.map((seminar) => (
                    <SwiperSlide key={seminar.id}>
                        <div className="relative w-full   h-[90vh]">
                            {/* Background Image */}
                            <Image
                                src={seminar.image}
                                alt={seminar.title}
                                fill
                                className="object-cover z-0"
                                priority
                            />

                            {/* Overlay (don't remove this!) */}
                            <div className="absolute inset-0 bg-blend-overlay bg-black/80  z-10" />

                            {/* Content */}
                            <div className="absolute z-20 inset-0 flex items-center justify-center text-center text-white px-4 mb-40 md:mb-0">
                                <div className="max-w-2xl space-y-4">
                                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{seminar.title}</h2>
                                    <p className="text-md md:text-base text-gray-200">📅 {new Date(seminar.date).toDateString()}</p>
                                    <p className="text-base md:text-xl">{seminar.description}</p>
                                    <Link href={`/seminars/${seminar.id}`}>
                                        <button>
                                            <PrimaryButton title="Book Seminar" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="custom-prev absolute top-1/2 left-2 md:left-10 z-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors  text-white font-medium  p-2 rounded-full shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className="custom-next absolute top-1/2 right-2 md:right-10 z-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors  text-white font-medium  p-2 rounded-full shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}
