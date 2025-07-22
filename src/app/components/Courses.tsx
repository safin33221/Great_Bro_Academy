"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import PrimaryButton from "./common/PrimaryButton"
import SectionTitle from "./common/SectionTitle"
import { CourseDetails } from "@/interfaces/course"

export default function CourseSection() {
  const [courses, setCourses] = useState<CourseDetails[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/courseDetails.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load course data:", err)
        setLoading(false)
      })
  }, [])

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 dark:bg-background">
      <SectionTitle title="Our Popular Courses" />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={index}
              className="animate-pulse border bg-muted rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="bg-gray-300 dark:bg-gray-700 h-[300px] w-full" />
              <div className="p-6 space-y-4 flex-grow">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24 ml-auto" />
              </div>
            </div>
          ))
          : courses.map((course) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={course.id}
              className="border bg-card rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-[300px] w-full ">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-center bg-cover  "
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex items-center justify-end"
                >
                  <PrimaryButton title="Explore" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
