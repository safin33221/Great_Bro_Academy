"use client"
import { Briefcase, GraduationCap, DollarSign, Users } from "lucide-react"
import SectionTitle from "./common/SectionTitle"

const features = [
    {
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        title: "Industry-Relevant Curriculum",
        desc: "Our courses are designed based on current job market needs — so you learn only what’s practical and in-demand.",
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Mentorship from Experts",
        desc: "Get guidance directly from professionals who work in the field — not just theoretical trainers.",
    },
    {
        icon: <DollarSign className="w-8 h-8 text-primary" />,
        title: "Affordable for All",
        desc: "We keep our pricing accessible so that every student in Bangladesh, regardless of background, can start their tech journey.",
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        title: "Career & Job Placement Support",
        desc: "From portfolio reviews to interview tips — we help you land your first freelance gig or job in the tech industry.",
    },
]

export default function WhyChooseUsSection() {
    return (
        <section className="py-20 px-4 md:px-10  bg-muted/50 dark:bg-muted/20">
            <div className="max-w-4xl mx-auto text-center mb-14">
                <SectionTitle title="Why Choose GreatBro Academy?" />
                {/* <p className="text-muted-foreground mt-3">
                    We go beyond just teaching — we build your future with practical skills and real-world mentorship.
                </p> */}
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Vertical line in center */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/20 transform -translate-x-1/2" />

                {features.map((item, idx) => {
                    const isLeft = idx % 2 === 0
                    return (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className={`relative mb-16 flex flex-col md:flex-row  items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                                }`}
                        >
                            <div className={`relative bg-card  border border-orange-200 rounded-xl shadow-md w-full md:w-[48%] hover:scale-105  duration-300 transition-all ease-linear p-6 ${isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                                }`}>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                                <p className="text-center">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}
