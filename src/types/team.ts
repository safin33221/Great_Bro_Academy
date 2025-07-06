import { StaticImageData } from "next/image"

export interface ITeam {
    name: string
    expertise: string
    image: StaticImageData | string
    linkedin?: string
}