import { CourseMaterial } from "@/src/types/course-material_type";
import CourseMaterialItem from "./CourseMaterialItem";

interface CourseMaterialSectionProps {
    courseMaterials?: CourseMaterial[];
}

export default function CourseMaterialSection({
    courseMaterials,
}: CourseMaterialSectionProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto mt-6">
            <div className="flex items-center gap-3 mb-6">
                <svg
                    className="w-8 h-8 text-purpple flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-900">
                    Materi Pembelajaran
                </h2>
            </div>
            {/* Pertemuan 1-2 */}
            {courseMaterials?.map((courseMaterial) => (
                <CourseMaterialItem
                    key={courseMaterial.id}
                    courseMaterial={courseMaterial}
                />
            ))}
        </div>
    );
}
