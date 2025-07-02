"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import SectionTitle from "./common/SectionTitle"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    className?: string
    reverse?: boolean
    repeat?: number
    pauseOnHover?: boolean
}

type Mentor = {
    name: string
    expertise: string
    image: string
    linkedin?: string
}

const mentors: Mentor[] = [
    {
        name: "Ariana Rahman",
        expertise: "Graphics Design Mentor",
        image: "/images/mentor1.jpg",
        linkedin: "https://linkedin.com/in/ariana",
    },
    {
        name: "Mahmudul Hasan",
        expertise: "MERN Stack Mentor",
        image: "/images/mentor2.jpg",
        linkedin: "https://linkedin.com/in/mahmudul",
    },
    {
        name: "Nadia Hossain",
        expertise: "Spoken English Coach",
        image: "/images/mentor3.jpg",
        linkedin: "https://linkedin.com/in/nadia",
    },
    {
        name: "Arnob Hossain",
        expertise: "Spoken English Coach",
        image: "/images/mentor3.jpg",
        linkedin: "https://linkedin.com/in/nadia",
    },
    {
        name: "Sabrina Mim",
        expertise: "Spoken English Coach",
        image: "/images/mentor3.jpg",
        linkedin: "https://linkedin.com/in/nadia",
    },
]

export default function MentorSection({

    reverse = false,
    repeat = 2,
    
    ...props
}: MarqueeProps) {
    const direction = reverse ? -1 : 1

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-background">
            <SectionTitle title="  Meet Our Mentors" />


            <div className="relative overflow-hidden w-full" {...props}>
                <motion.div
                    className={cn("flex gap-6 w-max")}
                    animate={{ x: [`0%`, `${direction * -50}%`] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 20, // 🎯 faster speed (was 20)
                    }}
                >
                    {/* Repeat mentors list twice for seamless looping */}
                    {[...Array(repeat)].flatMap((_, i) =>
                        mentors.map((mentor, idx) => (
                            <div
                                key={`${mentor.name}-${i}-${idx}`}
                                className="bg-white dark:bg-card rounded-xl shadow-md p-6 text-center min-w-[250px] max-w-[250px] hover:shadow-xl transition-all"
                            >
                                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                                    <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{mentor.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{mentor.expertise}</p>
                                {mentor.linkedin && (
                                    <a
                                        href={mentor.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800"
                                    >
                                        <FaLinkedin className="inline mr-1" /> Connect
                                    </a>
                                )}
                            </div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    )
}
