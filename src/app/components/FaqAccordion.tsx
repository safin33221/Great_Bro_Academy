import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SectionTitle from "./common/SectionTitle"

const faqs = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. Products must be unused and in original packaging.",
    },
    {
        question: "How long does shipping take?",
        answer: "Shipping usually takes 3–5 business days depending on your location.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, our customer support team is available 24/7 via email or live chat.",
    },
    {
        question: "Can I track my order?",
        answer: "Absolutely. Once your order ships, you'll receive a tracking number via email.",
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
