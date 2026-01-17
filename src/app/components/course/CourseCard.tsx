import Link from "next/link";

interface CourseProps {
    id: string;
    name: string;
    credits: number;
    description: string;
    instructor_id?: string;
    created_at?: string;
    updated_at?: string;
}

export default function CourseCard({
    id,
    credits,
    name,
    description,
}: CourseProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purpple hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="bg-gradient-to-br from-purpple to-purpple/80 p-6 relative min-h-[140px]">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {credits} SKS
                </span>
                <h2 className="text-xl font-bold text-white leading-tight">
                    {name}
                </h2>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>
                <Link
                    href={`/courses/${id}`}
                    className="block w-full bg-purpple text-white text-center font-semibold py-3 rounded-full hover:bg-purpple/90 transition-colors"
                >
                    Lihat RPS
                </Link>
            </div>
        </div>
    );
}
