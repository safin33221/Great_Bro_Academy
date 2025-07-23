"use client"

import RadialTeam from "./RadialNetworkGraph"
import RightTeamInfo from "./RightTeamInfo"
import { teamData } from "../../../../public/data/team"



export default function TeamSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-20 bg-background  ">
            <div className="text-center mb-12 md:hidden">
                <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
                <p className="text-muted-foreground mt-2">
                    Learn from industry-experienced mentors dedicated to your growth.
                </p>
            </div>

            <div className="relative pl-4 border-l-2 border-primary/30 space-y-10 md:hidden">
                {teamData.map((instructor, index) => (
                    <div
                        key={instructor.id}
                        className="relative pl-6"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay={index * 150}
                    >
                        {/* Dot indicator */}
                        <div className="absolute -left-[10px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-white"></div>

                        {/* Card */}
                        <div className="bg-card border rounded-xl shadow-md p-5 pt-12 relative flex flex-col items-center text-center hover:-translate-y-1 hover:scale-[1.01] transition duration-300">
                            {/* Floating Icon */}
                            <div className="absolute -top-8">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-amber-500 p-[2px]">
                                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                                        {instructor.icon}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mt-4">{instructor.name}</h3>
                            <p className="text-sm text-muted-foreground">{instructor.role}</p>
                        </div>
                    </div>
                ))}
            </div>



            <div className="hidden md:flex items-center justify-center ">
                <div className="w-1/2">
                    <RadialTeam />

                </div>
                <div className="w-1/2 mx-auto">

                    <RightTeamInfo />
                </div>
            </div>
        </section>
    )
}
