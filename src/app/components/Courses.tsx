"use client"

import Image from "next/image"
import Link from "next/link"

type Course = {
  id: string
  title: string
  description: string
  image: string
  slug: string
}

const courses: Course[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Master full-stack development with HTML, CSS, JavaScript, and MERN stack.",
    image: "/images/web.png",
    slug: "web-development",
  },
  {
    id: "2",
    title: "Graphic Design",
    description: "Learn Photoshop, Illustrator, branding and real-world design projects.",
    image: "/images/graphics.png",
    slug: "graphic-design",
  },
  {
    id: "3",
    title: "Spoken English",
    description: "Improve your fluency, pronunciation, and communication skills confidently.",
    image: "/images/english.png",
    slug: "spoken-english",
  },
]

export default function CourseSection() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Our Popular Courses
      </h2>
      <div className="grid gap-8 grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-72 w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-center bg-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{course.description}</p>
              <Link href={`/courses/${course.slug}`} className="mt-4">
                <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold px-4 py-2 rounded transition">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
