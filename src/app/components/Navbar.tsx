"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import logo from '../../../public/logo.png'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { ModeToggle } from "./ModeToggle"
import Image from "next/image"

const courseCategories = [
    {
        title: "Graphic Design",
        href: "/courses/graphic-design",
        description: "Master Photoshop, Illustrator & branding from scratch."
    },
    {
        title: "Web Development",
        href: "/courses/web-development",
        description: "Become a MERN stack developer with real-world projects."
    },
    {
        title: "UI/UX Design",
        href: "/courses/ui-ux",
        description: "Design intuitive interfaces using Figma and prototyping tools."
    },
    {
        title: "Video Editing",
        href: "/courses/video-editing",
        description: "Learn Adobe Premiere Pro & After Effects professionally."
    }
]

export function Navbar() {
    return (
        <div className="flex items-center justify-between container mx-auto py-4">
            <div>
                {/* <h1 className="text-2xl font-bold text-primary">Great BroIt</h1> */}
                <Image src={logo} width={100} height={100} alt="logo" />
            </div>

            <NavigationMenu viewport={false}>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[500px] gap-2 md:grid-cols-2">
                                {courseCategories.map((course) => (
                                    <ListItem key={course.title} href={course.href} title={course.title}>
                                        {course.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/about">About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/contact">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[250px] gap-2">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/dashboard">
                                            <div className="font-medium">My Dashboard</div>
                                            <p className="text-muted-foreground text-sm">Access your courses and profile.</p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/dashboard/enrolled">
                                            <div className="font-medium">Enrolled Courses</div>
                                            <p className="text-muted-foreground text-sm">Continue learning from your enrolled courses.</p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Status</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/status/backlog" className="flex items-center gap-2">
                                            <CircleHelpIcon className="w-4 h-4" /> Backlog
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/status/todo" className="flex items-center gap-2">
                                            <CircleIcon className="w-4 h-4" /> To Do
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/status/done" className="flex items-center gap-2">
                                            <CircleCheckIcon className="w-4 h-4" /> Done
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <div>
                <ModeToggle />
            </div>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-lg font-medium">{title}</div>
                    <p className="text-muted-foreground text-sm leading-snug">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
