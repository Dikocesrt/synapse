import { Course } from "@/src/types/course_type";

interface CourseInformationSectionProps {
    course: Course | null;
}

export default function CourseInformationSection({
    course,
}: CourseInformationSectionProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto">
            <div className="flex items-center gap-3 mb-4">
                <svg
                    className="w-8 h-8 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#652ac8"
                        strokeWidth="2"
                    />
                    <circle cx="12" cy="8" r="1" fill="#652ac8" />
                    <path
                        d="M12 11V16"
                        stroke="#652ac8"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-900">
                    Informasi Mata Kuliah
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2 border border-gray-200 rounded-xl p-5 bg-gray-50 hover:border-purpple/30 transition-colors">
                    <p className="text-[14px] font-semibold text-gray-400 uppercase tracking-wide">
                        Mata Kuliah
                    </p>
                    <p className="text-gray-800 font-medium">{course?.name}</p>
                </div>
                <div className="flex flex-col gap-2 border border-gray-200 rounded-xl p-5 bg-gray-50 hover:border-purpple/30 transition-colors">
                    <p className="text-[14px] font-semibold text-gray-400 uppercase tracking-wide">
                        BOBOT SKS
                    </p>
                    <p className="text-gray-800 font-medium">
                        {course?.credits} SKS
                    </p>
                </div>
                <div className="flex flex-col gap-2 border border-gray-200 rounded-xl p-5 bg-gray-50 hover:border-purpple/30 transition-colors">
                    <p className="text-[14px] font-semibold text-gray-400 uppercase tracking-wide">
                        DOSEN PENGAMPU
                    </p>
                    <p className="text-gray-800 font-medium">
                        {course?.instructors?.full_name}
                    </p>
                </div>
            </div>
        </div>
    );
}
