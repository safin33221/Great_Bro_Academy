import CoreValues from "./about/components/CourseValue";
import CourseSection from "./components/Courses"
import FaqAccordion from "./components/FaqAccordion";
import HeroSlider from "./components/Hero"
import Mentor from "./components/Mentors"
import WhatsAppBtn from "./components/WhatsAppBtn";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <CourseSection />
      <Mentor />
      <CoreValues/>
      <FaqAccordion/>
      <WhatsAppBtn/>

    </div>
  );
}
