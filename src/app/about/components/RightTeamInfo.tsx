// components/RightTeamInfo.tsx
import React from "react"
import { Rocket, Users, Star, Globe } from "lucide-react"

export default function RightTeamInfo() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {/* Team Overview */}
      <div>
        <h2 className="text-3xl font-bold ">Meet Our Team</h2>
        <p className="mt-2 ">
          A passionate group of developers, designers, and strategists building
          impactful digital experiences across the world.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 border rounded-xl bg-card shadow">
          <Rocket className="mx-auto mb-1 text-orange-600" />
          <h4 className="text-lg font-semibold">150+</h4>
          <p className="text-sm ">Projects</p>
        </div>
        <div className="p-4 border rounded-xl bg-card shadow">
          <Users className="mx-auto mb-1 text-orange-600" />
          <h4 className="text-lg font-semibold">20+</h4>
          <p className="text-sm ">Team Members</p>
        </div>
        <div className="p-4 border rounded-xl bg-card shadow">
          <Globe className="mx-auto mb-1 text-orange-600" />
          <h4 className="text-lg font-semibold">50+</h4>
          <p className="text-sm ">Countries</p>
        </div>
        <div className="p-4 border rounded-xl bg-card shadow">
          <Star className="mx-auto mb-1 text-orange-600" />
          <h4 className="text-lg font-semibold">98%</h4>
          <p className="text-sm ">Satisfaction</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-4 mt-4 border-l-4 border-orange-500 bg-indigo-50 rounded">
        <p className="text-gray-700">
          Want to work with us? Join our creative family or drop a message!
        </p>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
            Join Now
          </button>
          <button className="px-4 py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
