import CourseSection from "./components/Courses"
import HeroSlider from "./components/Hero"


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <CourseSection />
      <h1>Great Bro academy is here</h1>
    </div>
  );
}
