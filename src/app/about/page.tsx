export default function Page() {
    return (
        <main className=" mx-auto my-10 px-8">
            <h1 className="text-4xl font-bold mb-6 font-poppins text-center ">
                Tentang Synapse
            </h1>

            {/* Card Platform Pembelajaran Neuroanestesi */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Platform Pembelajaran Neuroanestesi
                </h2>
                <p className="text-gray-500 mb-6">
                    Synapse adalah platform pembelajaran berbasis web yang
                    dirancang khusus untuk mendukung pendidikan neuroanestesi
                    dengan pendekatan{" "}
                    <span className="font-semibold">flipped classroom</span>.
                    Platform ini memfasilitasi pembelajaran mandiri untuk
                    pemahaman konseptual sebelum praktikum, memaksimalkan waktu
                    tatap muka untuk diskusi, simulasi, dan aplikasi klinis.
                </p>

                <p className="text-gray-500 mb-6">
                    Dikembangkan sebagai produk media pembelajaran hasil
                    penelitian, Synapse mengintegrasikan teknologi pembelajaran
                    modern dengan kebutuhan akademik program studi anestesi.
                </p>
            </div>

            {/* Card flipped classroom */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Pendekatan Flipped Classroom
                </h2>
                <p className="text-gray-600 mb-6">
                    Metode flipped classroom membalik pola pembelajaran
                    tradisional:
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
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">
                                Pre-Class Learning :
                            </span>
                            Mahasiswa mempelajari materi teori secara mandiri
                            melalui video, modul, dan artikel di platform
                            Synapse
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
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">
                                In-Class Activities:
                            </span>
                            Waktu tatap muka difokuskan pada diskusi mendalam,
                            pemecahan masalah, simulasi, dan praktikum klinik
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
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">
                                Post-Class Assessment :
                            </span>
                            Evaluasi pemahaman melalui kuis interaktif dan
                            refleksi pembelajaran
                        </p>
                    </div>
                </div>
            </div>

            {/* Card Fitur & Integrasi Sistem*/}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Fitur & Integrasi Sistem
                </h2>

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
                        <p className="text-gray-600">
                            Akses lengkap ke RPS (Rencana Pembelajaran Semester)
                            setiap mata kuliah
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
                        <p className="text-gray-600">
                            Materi pembelajaran terstruktur: PDF, PowerPoint,
                            video, dan artikel jurnal
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
                        <p className="text-gray-600">
                            Integrasi dengan sumber belajar eksternal (Aneskey,
                            Mentimeter, ABG Ninja)
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
                        <p className="text-gray-600">
                            Platform evaluasi dan kuis interaktif untuk
                            self-assessment
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
                        <p className="text-gray-600">
                            Terintegrasi dengan sistem e-learning institusi
                            untuk presensi dan penugasan
                        </p>
                    </div>
                </div>
            </div>

            {/* Card Fokus Pembelajaran */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Fokus Pembelajaran
                </h2>
                <p className="text-gray-600 mb-6">Platform ini fokus pada:</p>

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
                            Pemahaman konseptual mendalam sebelum praktikum
                            klinik
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
                            Persiapan teori untuk aplikasi praktis di
                            laboratorium dan rumah sakit
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
                            Pembelajaran berbasis bukti (evidence-based
                            learning)
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
                            Integrasi pengetahuan multi-sistem (neurologi,
                            kardiovaskuler, respirasi)
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
                            Keselamatan pasien dan protokol klinis dalam
                            neuroanestesi
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative bg-gradient-to-r from-purpple to-purpple/90 rounded-2xl p-10 lg:p-16 mt-10 overflow-hidden">
                <svg
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-24 lg:w-16 lg:h-32 text-white/20"
                    viewBox="0 0 64 128"
                    fill="currentColor"
                >
                    <circle cx="32" cy="16" r="8" />
                    <circle cx="16" cy="64" r="6" />
                    <circle cx="48" cy="64" r="6" />
                    <circle cx="32" cy="112" r="8" />
                    <line
                        x1="32"
                        y1="24"
                        x2="16"
                        y2="58"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <line
                        x1="32"
                        y1="24"
                        x2="48"
                        y2="58"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="70"
                        x2="32"
                        y2="104"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <line
                        x1="48"
                        y1="70"
                        x2="32"
                        y2="104"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

                <svg
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-24 lg:w-16 lg:h-32 text-white/20"
                    viewBox="0 0 64 128"
                    fill="currentColor"
                >
                    <circle cx="32" cy="16" r="8" />
                    <circle cx="16" cy="64" r="6" />
                    <circle cx="48" cy="64" r="6" />
                    <circle cx="32" cy="112" r="8" />
                    <line
                        x1="32"
                        y1="24"
                        x2="16"
                        y2="58"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <line
                        x1="32"
                        y1="24"
                        x2="48"
                        y2="58"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="70"
                        x2="32"
                        y2="104"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <line
                        x1="48"
                        y1="70"
                        x2="32"
                        y2="104"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

                <div className="relative z-10 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Siap Memulai Pembelajaran?
                    </h2>
                    <p className="text-white/80 mb-8 text-base lg:text-lg">
                        Jelajahi materi neuroanestesi dan persiapkan diri untuk
                        praktikum klinik
                    </p>
                    <a
                        href="index.html"
                        className="inline-block bg-white text-purpple font-semibold py-3 px-8 rounded-full hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </main>
    );
}
