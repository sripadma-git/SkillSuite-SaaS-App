"use client";

import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
    return (
        <article
            className="rounded-xl p-4 shadow-md flex flex-col justify-between w-full"
            style={{ backgroundColor: color }}
        >
            {/* Top Section: Subject badge and Bookmark icon */}
            <div className="flex justify-between items-start mb-4">
                <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {subject}
                </span>
                <button className="companion-bookmark" >
                    <Image
                        src="/icons/bookmark.svg"
                        alt="bookmark"
                        width={12.5}
                        height={15}
                    />
                </button>
            </div>

            {/* Title and Topic */}
            <h2 className="text-xl font-bold mb-1">{name}</h2>
            <p className="text-sm text-gray-800 mb-4">{topic}</p>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-5">
                <Image src="/icons/clock.svg" alt="clock" width={14} height={14} />
                <p className="text-sm">{duration} minutes</p>
            </div>

            {/* Launch Button (Full Width & Centered) */}
            <Link href={`/companions/${id}`} className="w-full">
                <button className="w-full bg-black text-white py-2 rounded-full font-semibold">
                    Launch Lesson
                </button>
            </Link>
        </article>
    );
};

export default CompanionCard;