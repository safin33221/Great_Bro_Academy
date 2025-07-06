"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"
import SectionTitle from "./common/SectionTitle"


import mdRokonWeb from '../../../public/images/Mentors/Md-rokon--python.png'
import nazmulHossainGraphich from '../../../public/images/Mentors/Nazmul-Hossain-Shaon--Graphic-Design.png'
import MustakDigitalM from '../../../public/images/Mentors/Md-Mustak--Digital-Marketing.png'
import TasnimIslamSpokenE from '../../../public/images/Mentors/Tasmia-islam-aurin--Spoken-English.png'
import BelalHossainAssGD from '../../../public/images/Mentors/Belal-Hossain-Labbi--Assistant-GD.png'
import SafayetHossanSafinAsWeb from '../../../public/images/Mentors/Safayet-hossan-safin-As-Web.jpg'
import { MagicCard } from "@/components/MagicCard"
import Aos from "aos"
import 'aos/dist/aos.css';
interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    reverse?: boolean
    repeat?: number


    pauseOnHover?: boolean;
}

type Mentor = {
    name: string
    expertise: string
    image: StaticImageData
    linkedin?: string
}

const mentors: Mentor[] = [
    {
        name: "Md Rokon",
        expertise: "Web Instructor",
        image: mdRokonWeb,
        linkedin: "https://linkedin.com/in/ariana",
    },
    {
        name: "Nazmul Hossain Shaon",
        expertise: "Graphic Design Instructor",
        image: nazmulHossainGraphich,
        linkedin: "https://linkedin.com/in/mahmudul",
    },
    {
        name: "Md Mustak",
        expertise: "Digital Marketing Instructor",
        image: MustakDigitalM,
        linkedin: "https://linkedin.com/in/nadia",
    },
    {
        name: "Tasnim Islam",
        expertise: "Spoken English Coach",
        image: TasnimIslamSpokenE,
        linkedin: "https://linkedin.com/in/nadia",
    },
    {
        name: "Safayet Hossan Safin",
        expertise: "Assistant Web Instructor",
        image: SafayetHossanSafinAsWeb,
        linkedin: "https://www.linkedin.com/in/safayet-hossan-safin",
    },
    {
        name: "Belal Hossain",
        expertise: "Assistant Graphic Design",
        image: BelalHossainAssGD,
        linkedin: "https://linkedin.com/in/nadia",
    },
]

export default function MentorSection({
    reverse = false,
    repeat = 2,
    ...props
}: MarqueeProps) {
    const direction = reverse ? -1 : 1
    Aos.init();
    return (
        <section className="py-10 px-4 md:px-8 lg:px-16 dark:bg-background">
            <SectionTitle title="Meet Our Mentors" />

            <div
                data-aos="fade-up"
                data-aos-duration="2000"

                className="relative overflow-hidden w-full" {...props}>
                <motion.div

                    className={cn("flex gap-6 w-max")}
                    animate={{ x: [`0%`, `${direction * -50}%`] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...Array(repeat)].flatMap((_, i) =>
                        mentors.map((mentor, idx) => (
                            <MagicCard

                                key={`${mentor.name}-${i}-${idx}`}
                                className="min-w-[250px] max-w-[270px] p-[1px] rounded-xl"
                            >
                                <div className={`group-hover:[animation-play-state:paused] bg-white dark:bg-card rounded-xl border shadow-md p-6 text-center hover:shadow-xl transition-all`}>
                                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            fill
                                            className="object-cover bg-center"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                        {mentor.expertise}
                                    </p>
                                    {mentor.linkedin && (
                                        <a
                                            href={mentor.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800"
                                        >
                                            <FaLinkedin /> Connect
                                        </a>
                                    )}
                                </div>
                            </MagicCard>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    )
}
