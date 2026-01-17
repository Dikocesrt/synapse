import Link from "next/link";
import EvaluationSection from "../components/evaluation/EvaluationSection";

export default function Page() {
    return (
        <main className="py-12 px-6 lg:px-16 bg-gray-50 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Evaluasi Interaktif
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Uji dan evaluasi pemahaman Anda melalui berbagai platform
                    interaktif dan self-assessment
                </p>
            </div>

            <EvaluationSection />

            {/* Tentang Evaluasi */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green mx-auto mt-18">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Tentang Evaluasi
                </h2>
                <p className="text-gray-600 mb-6">
                    Platform evaluasi ini dirancang untuk mendukung pembelajaran
                    mandiri dan penilaian formatif. Anda dapat mengakses
                    berbagai sumber evaluasi eksternal yang terintegrasi dengan
                    materi pembelajaran.
                </p>

                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-700">
                            Latihan soal dengan feedback langsung
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-700">
                            Simulasi kasus klinis untuk aplikasi pengetahuan
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-700">
                            Self-assessment untuk mengukur progres pembelajaran
                        </p>
                    </div>
                </div>
            </div>

            {/* Back */}
            <div className="text-center mt-10">
                <Link
                    href="/"
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
                </Link>
            </div>
        </main>
    );
}
