"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { teamData } from "../../../../public/data/team"

export default function RadialTeam() {
  const center = teamData[0]
  const others = teamData.slice(1)

  const [radius, setRadius] = useState(200)

  const handleResize = useCallback(() => {
    const width = window.innerWidth
    if (width < 480) setRadius(150)
    else if (width < 768) setRadius(140)
    else if (width < 1024) setRadius(180)
    else setRadius(220)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <div>
      <div className="relative min-h-[499px] md:min-h-[599px] w-full flex items-center justify-center py-20">
        {/* Radial ring */}
        <div
          className="absolute border border-dashed border-gray-300 rounded-full"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        ></div>

        {/* Central Member */}
        <div className="z-10 absolute w-36 h-36 rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center">
          <Image
            src={center.image}
            alt={center.name || "Team member"}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <p className="mt-2 font-semibold">{center.name}</p>
          <p className="text-xs text-gray-500">{center.role}</p>
        </div>

        {/* Radial Members */}
        {others.map((member, index) => {
          const angle = (index / others.length) * 2 * Math.PI
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <div
              key={member.id}
              className="absolute flex flex-col items-center text-center transition-all duration-300"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={member.image}
                  alt={member.name || "Team member"}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
