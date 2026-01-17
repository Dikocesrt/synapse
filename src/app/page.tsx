import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ExternalLearningResourceSection from "./components/external-learning/ExternalLearningResourceSection";

export default function Page() {
    return (
        <div className="w-full mx-auto">
            {/* Navbar */}
            <Navbar />

            {/* Welcome Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purpple to-purpple/80 py-16 lg:py-24 px-6 lg:px-16">
                <div className="absolute -right-16 top-1/2 -translate-y-1/3 w-1/2 h-full pointer-events-none hidden lg:block">
                    <Image
                        src="/hero.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-100 h-auto object-contain opacity-15 blur-[1px]"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full lg:max-w-2xl">
                    <h1 className="text-3xl lg:text-5xl font-poppins font-bold text-white leading-tight">
                        Selamat Datang di Synapse
                    </h1>
                    <p className="text-base lg:text-lg font-poppins text-white/90 mt-6 leading-relaxed">
                        Platform pembelajaran berbasis web untuk pendidikan
                        neuroanestesi dengan pendekatan flipped classroom.
                        Pelajari materi teori secara mandiri, persiapkan diri
                        untuk praktikum, dan evaluasi pemahaman Anda.
                    </p>
                    <div className="mt-8 flex items-center bg-white rounded-full p-1 lg:p-1.5 shadow-lg w-full lg:max-w-lg">
                        <input
                            type="text"
                            placeholder="Cari materi pembelajaran..."
                            className="flex-1 min-w-0 py-2 lg:py-2.5 px-4 lg:px-5 text-sm lg:text-base text-gray-600 font-poppins bg-transparent focus:outline-none"
                        />
                        <button className="bg-green text-white font-poppins font-semibold py-2 lg:py-3 px-5 lg:px-8 rounded-full hover:bg-green/90 transition-colors text-sm lg:text-base flex-shrink-0">
                            Cari
                        </button>
                    </div>
                </div>
            </div>

            {/* Fitur Utama Section */}
            <div className="flex flex-col items-center py-16 lg:py-24 px-6 lg:px-12">
                <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-8">
                    Fitur Utama
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Card Pembelajaran */}
                    <div className="flex flex-col bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-purpple hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
                        {/* Icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-purpple to-purpple/80 rounded-xl flex items-center justify-center mb-5">
                            <svg
                                className="w-7 h-7 text-white"
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
                        </div>
                        {/* Title */}
                        <h2 className="text-xl font-poppins font-bold text-gray-900 mb-3">
                            Pembelajaran
                        </h2>
                        {/* Description */}
                        <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-6">
                            Akses materi lengkap neuroanestesi dengan RPS
                            terstruktur, video pembelajaran, dan sumber belajar
                            eksternal untuk pemahaman konseptual mendalam.
                        </p>
                        {/* Button */}
                        <Link
                            href="/pembelajaran"
                            className="inline-flex items-center justify-center bg-gradient-to-br from-purpple to-purpple/80 text-white font-poppins font-semibold py-3 px-6 rounded-[12px] hover:bg-purpple/90 transition-colors w-fit"
                        >
                            Mulai Belajar
                        </Link>
                    </div>
                    {/* Card Evaluasi */}
                    <div className="flex flex-col bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-purpple hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
                        {/* Icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-green to-green/80 rounded-xl flex items-center justify-center mb-5">
                            <svg
                                className="w-7 h-7 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        {/* Title */}
                        <h2 className="text-xl font-poppins font-bold text-gray-900 mb-3">
                            Evaluasi
                        </h2>
                        {/* Description */}
                        <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-6">
                            Uji pemahaman melalui evaluasi diri dan flashcard.
                            Terintegrasi dengan platform eksternal untuk
                            pengalaman belajar yang komprehensif.
                        </p>
                        {/* Button */}
                        <Link
                            href="/evaluasi"
                            className="inline-flex items-center justify-center bg-gradient-to-br from-green to-green/80 text-white font-poppins font-semibold py-3 px-6 rounded-[12px] hover:bg-green/90 transition-colors w-fit"
                        >
                            Mulai Evaluasi
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sumber Belajar External */}
            <ExternalLearningResourceSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}
