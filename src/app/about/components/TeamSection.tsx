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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:hidden">
                {teamData.map((instructor) => (
                    <div
                        key={instructor.id}
                        className="border bg-card rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                        <div className="mb-4">{instructor.icon}</div>
                        <h3 className="text-xl font-semibold text-foreground">{instructor.name}</h3>
                        <p className="text-muted-foreground">{instructor.role}</p>
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
