import Link from "next/link";
import CourseSection from "../components/course/CourseSection";

export default function Page() {
    return (
        <main className="py-12 px-6 lg:px-16 bg-gray-50 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Materi Pembelajaran
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Pilih mata kuliah untuk melihat Rencana Pembelajaran
                    Semester (RPS) dan mulai belajar
                </p>
            </div>

            <CourseSection />

            {/* Back */}
            <div className="text-center mt-10">
                <a
                    href="index.html"
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
                    Kembali ke Beranda
                </a>
            </div>
        </main>
    );
}
