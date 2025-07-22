"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Calendar, GraduationCap, Languages, Layers, Timer } from "lucide-react"
import { CourseDetails } from "@/interfaces/course"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const [courses, setCourses] = useState<CourseDetails[]>([])

    useEffect(() => {
        fetch("/data/courseDetails.json")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Failed to load course data:", err))
    }, [])

    const course = courses.find((c) => c.slug === slug)

    if (!course) return <div className="text-center text-red-600 mt-10">Course not found</div>

    return (
        <div className=" max-w-[90vw] mx-auto   ">

            <div className="flex flex-col md:flex-row gap-5  justify-center bg-card  border rounded-xl">
                <div className=" lg:w-1/2 relative h-[250px] md:h-[500px]   overflow-hidden ">
                    <Image
                        src={course.thumbnail}
                        alt={course.title}
                        layout="fill"

                        className="rounded-t-xl lg:rounded-l-xl lg:rounded-t-none h-full bg-cover object-fit "
                    />
                </div>

                <div className="mx-5 md:m-10 md:w-1/2">

                    <h1 className=" text-2xl md:text-4xl my-2 font-bold">{course.title}</h1>

                    <p className=" mb-6">{course.description}</p>

                    <div className="grid md:grid-cols-3 gap-4 mb-1 text-sm ">
                        <div className="flex gap-2 items-center"><Timer className="w-4" />Duration: {course.duration}</div>
                        <div className="flex gap-2 items-center"><GraduationCap className="w-4" />Level: {course.level}</div>
                        <div className="flex gap-2 items-center"><Languages className="w-4" />Language: {course.language}</div>
                        <div className="flex gap-2 items-center"><Calendar className="w-4" />Start Date: {course.startDate}</div>
                        {course?.certificate && (
                            <div className="flex gap-2 items-center text-green-600">
                                <BadgeCheck className="w-4" /> Certificate Provided
                            </div>
                        )}
                    </div>

                    <div className="b rounded-lg py-4 mb-6 flex gap-2">
                        <h2 className="text-xl font-semibold mb-2">Pricing:</h2>
                        <p className="text-lg">
                            <span className="text-green-600 font-bold">{course.price.discounted}৳</span>
                            <span className="line-through mr-2 text-red-500 text-sm relative bottom-2">{course.price.original}৳</span>
                        </p>
                    </div>
                    {course.technologies && (
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                                {course.technologies.map((tech, i) => (
                                    <span key={i} className=" bg-background font-bold text-sm px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    {course.tools && (
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Tools:</h2>
                            <div className="flex flex-wrap gap-2">
                                {course.tools.map((tool, i) => (
                                    <span key={i} className=" bg-background  font-semibold text-sm px-2 py-1 rounded">{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>







            {/* Learning + Projects */}
            <div className="flex flex-col lg:flex-row gap-10 mt-14">
                <div className="w-full lg:w-1/2 px-2">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">📘 What You will Learn</h2>
                    <ul className="list-disc pl-6 space-y-2 ">
                        {course.learningOutcomes.map((item, i) => (
                            <li className="hover:bg-card p-2" key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 px-2">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">💼 Projects</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {course.projects.map((proj, i) => (
                            <li key={i} className="p-2">
                                <span className="font-medium">{proj.title}</span>
                                {proj.tech && (
                                    <span className="ml-2 text-sm">({proj.tech.join(", ")})</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Modules */}
            <div className="my-10 px-2">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">📚 Course Modules</h2>
                <ul className="space-y-3">
                    {course.modules.map((mod, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 hover:bg-card p-3 rounded shadow-sm transition text-xl my-5 "
                        >
                            <Layers className="text-orange-400 w-5 h-5 shrink-0 mt-1" />
                            <span>
                                <strong className="text-orange-400">Week {mod.week}:</strong> {mod.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Instructor Info */}
            <div className="border-t pt-8 mt-10 flex flex-col sm:flex-row items-center gap-5 px-2">
                <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    width={90}
                    height={90}
                    className="rounded-full object-cover shadow"
                />
                <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                    <p className="text-sm">{course.instructor.title}</p>
                    <Link
                        href={course.instructor.linkedin}
                        target="_blank"
                        className="text-blue-600 text-sm font-medium underline"
                    >
                        View LinkedIn
                    </Link>
                </div>
            </div>

        </div>
    )
}
