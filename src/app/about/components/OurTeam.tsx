"use client"
import { ITeam } from '@/types/team';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const OurTeam = () => {
    const [teams, setTeam] = useState<ITeam[]>([])
    useEffect(() => {
        fetch("/data/team.json")
            .then((res) => res.json())
            .then((data) => setTeam(data))
            .catch((err) => console.error("Failed to load course data:", err))
    }, [])
    console.log(teams);
    return (
        <div className='m-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    teams?.map((team: ITeam, ids) => (
                        <div key={ids} className="group [perspective:1000px] max-w-md h-[254px] font-sans">
                            <div className="relative    w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front Side */}
                                <div className="absolute bg-card inset-0 flex flex-col justify-center items-center rounded-xl border  shadow-md [backface-visibility:hidden] border-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:brightness-110 transition-colors  font-medium p-4">
                                    <Image
                                        src={team?.image}
                                        alt="Profile"
                                        className="w-[100px] h-[100px] rounded-full object-cover shadow-lg mb-3"
                                        width={100}
                                        height={100}
                                    />
                                    <h2 className="text-lg font-bold  ">{team?.name}</h2>
                                    <p className="text-sm text-center   ">{team?.expertise}</p>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center rounded-xl border border-[coral] shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-[#ffae91] via-[coral] via-60% to-[#ffb9a0] text-white p-4">
                                    <h3 className="text-sm font-semibold">🎓 Degree</h3>
                                    <p className="text-xs mb-2">B.Sc. in CSE</p>

                                    <h3 className="text-sm font-semibold">🏫 Education</h3>
                                    <p className="text-xs mb-2 text-center">Feni Polytechnic Institute</p>

                                    <h3 className="text-sm font-semibold">📍 Location</h3>
                                    <p className="text-xs text-center">Feni, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurTeam;