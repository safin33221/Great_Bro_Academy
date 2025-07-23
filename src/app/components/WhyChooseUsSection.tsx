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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8  mx-auto">
                {features.map((item, idx) => (
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        key={idx}
                        className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition border-l-4 border-l-amber-600"
                    >
                        <div className="mb-4 flex items-center justify-center">{item.icon}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2 text-center">{item.title}</h3>
                        <p className="">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
