import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SectionTitle from "./common/SectionTitle"

const faqs = [
    {
        question: "Are the classes live or recorded?",
        answer: "All classes are conducted live via Zoom. However, recordings are also provided for later review.",
    },
    {
        question: "Do I need a laptop to join the course?",
        answer: "A laptop is highly recommended for hands-on practice, but you can also join the live classes from a mobile or tablet.",
    },
    {
        question: "What if I miss a live class?",
        answer: "Don’t worry! You’ll get access to the full class recording, so you can catch up anytime.",
    },
    {
        question: "Will I get a certificate after course completion?",
        answer: "Yes! You’ll receive a digital certificate upon successfully completing the course and final project.",
    },
    {
        question: "How can I join the Zoom classes?",
        answer: "After enrollment, you'll be added to a private student group where Zoom links and class schedules are shared.",
    },
    {
        question: "Is there any support after the course ends?",
        answer: "Yes, you’ll continue to receive career guidance, project feedback, and mentorship through our alumni community.",
    },
]


const FaqAccordion = () => {
    return (
        <section className=" mx-auto p-4 md:p-16">

            <SectionTitle title="Frequently Asked Questions" />
            <Accordion
                data-aos="fade-up"
                data-aos-duration="3000"
                type="single" collapsible className="w-full space-y-2 text-2xl">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default FaqAccordion
