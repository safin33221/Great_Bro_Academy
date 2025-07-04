 export interface CourseDetails {
    id: string
    title: string
    slug: string
    thumbnail:string
    category: "Web Development" | "Graphic Design" | "Spoken English"
    description: string
    objectives: string[]
    technologies?: string[] // for technical courses only
    duration: string
    level: "Beginner" | "Intermediate" | "Advanced"
    language: string
    instructor: {
        name: string
        image: string
        bio: string
        linkedin?: string
    }
    price: string
    image: string
    videoPreview?: string
    syllabus: {
        week: number
        topics: string[]
    }[]
    reviews?: {
        user: string
        rating: number
        comment: string
    }[]
}
