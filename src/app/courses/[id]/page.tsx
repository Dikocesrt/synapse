import { courseService } from "@/src/services/course_service";
import CourseInformationSection from "../../components/course/CourseInformationSection";
import CourseOutcomeSection from "../../components/course/CouseOutcomeSection";
import CourseMaterialSection from "../../components/course/CourseMaterialSection";
import Link from "next/link";

interface CourseDetailProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: CourseDetailProps) {
    const { id } = await params;

    const course = await courseService.getById(id);

    return (
        <main className=" mx-auto my-10 px-8">
            {/* RPS */}
            <div className="relative bg-gradient-to-br from-purpple to-purpple/90 rounded-2xl p-6 lg:p-10 overflow-hidden mb-10">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                    Rencana Pembelajaran Semester (RPS)
                </h2>
                <p className="text-gray-200 text-base lg:text-lg">
                    {course?.name}
                </p>
            </div>

            {/* Card Informasi mata kuliah */}
            <CourseInformationSection course={course} />

            {/* Deskripsi Mata Kuliah */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <svg
                        className="w-8 h-8 text-purpple flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Deskripsi Mata Kuliah
                    </h2>
                </div>
                <p className="font-poppins text-gray-600">
                    {course?.description}
                </p>
            </div>

            {/* Capaian Pembelajaran */}
            <CourseOutcomeSection courseOutcomes={course?.course_outcomes} />

            {/* Materi Pembelajaran */}
            <CourseMaterialSection courseMaterials={course?.course_materials} />

            {/* Back */}
            <div className="text-center mt-10">
                <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 text-purpple font-semibold hover:text-purpple/80 transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Kembali ke Pembelajaran
                </Link>
            </div>
        </main>
    );
}
