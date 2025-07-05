export interface CourseDetails {
    id: string
    title: string
    slug: string
    category: string
    description: string
    thumbnail: string
    banner: string
    level: string
    duration: string
    language: string
    price: {
        original: number
        discounted: number
        currency: string
    }
    technologies?: string[] // Only for web dev course
    tools?: string[] // For web dev & graphic design
    learningOutcomes: string[]
    projects: {
        title: string
        tech?: string[]
    }[]
    modules: {
        week: number
        title: string
    }[]
    instructor: {
        name: string
        title: string
        image: string
        linkedin: string
    }
    startDate: string
    certificate: boolean
}
