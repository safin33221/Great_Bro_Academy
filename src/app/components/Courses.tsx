"use client"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "./common/PrimaryButton"
import SectionTitle from "./common/SectionTitle"
import { useEffect, useState } from "react"
import { CourseDetails } from "@/interfaces/course"





export default function CourseSection() {
  const [courses, setCourses] = useState<CourseDetails[]>([])

  useEffect(() => {
    fetch("/data/courseDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to load course data:", err))
  }, [])

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-background">
      <SectionTitle title="Our Popular Courses" />
      <div className="grid gap-8 grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-96  w-full">
              <Image
                src={course?.thumbnail}
                alt={course.title}
                fill
                className="object-center bg-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{course.description}</p>
              <Link href={`/courses/${course.slug}`} className="mt-4 flex items-center justify-end">
                <PrimaryButton title="Explore" />

              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
