"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"
import Image from "next/image"
import logo from '../../../public/logo.png'
import DarkLogo from '../../../public/GREATBRO-ACADEMY-LOGO-white.png';

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

const courseCategories = [
  {
    title: "Graphic Design",
    href: "/courses/graphic-design-course",
    description: "Master Photoshop, Illustrator & branding from scratch."
  },
  {
    title: "Web Development",
    href: "/courses/web-development-bootcamp",
    description: "Become a MERN stack developer with real-world projects."
  },
  {
    title: "Spoken English",
    href: "/courses/spoken-english-course",
    description: "Learn Adobe Premiere Pro & After Effects professionally."
  }
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center gap-2">

        <Image src={logo} width={100} height={100} alt="logo" className="block dark:hidden" />
        <Image src={DarkLogo} width={100} height={100} alt="logo" className="hidden dark:block" />
        {/* <h1 className="text-xl font-bold hidden sm:block">Greate Bro Id</h1> */}
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px]  gap-2 grid-cols-1">
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

            {/* <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] gap-2 p-2">
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
            </NavigationMenuItem> */}



          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center gap-3">
        <ModeToggle />
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-md md:hidden p-4 z-50">
          <nav className="flex flex-col gap-3">
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/courses" onClick={() => setMobileOpen(false)}>Courses</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
          </nav>
        </div>
      )}
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
