"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // ← Tambah import

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Mobile Navbar */}
            <nav className="bg-purpple lg:hidden">
                <div className="flex flex-row justify-between items-center py-4 px-4">
                    {/* Logo & Brand */}
                    <div className="flex flex-row items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Synapse Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-lg"
                        />
                        <p className="text-xl text-white font-poppins font-bold">
                            Synapse
                        </p>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <svg
                            className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "" : "hidden"}`}
                >
                    <div className="flex flex-col px-4 pb-4 gap-2">
                        <Link
                            href="/"
                            className={`text-white font-poppins font-medium py-3 px-4 rounded-lg transition-colors ${
                                isActive("/")
                                    ? "bg-white/20"
                                    : "bg-white/10 hover:bg-white/20"
                            }`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/about"
                            className={`text-white font-poppins font-medium py-3 px-4 rounded-lg transition-colors ${
                                isActive("/about")
                                    ? "bg-white/20"
                                    : "bg-white/10 hover:bg-white/20"
                            }`}
                        >
                            Tentang
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Desktop Navbar */}
            <nav className="hidden lg:flex bg-gradient-to-br from-purpple to-purpple/80 justify-between items-center py-5 px-8">
                <div className="flex flex-row items-center gap-4">
                    <Image
                        src="/logo.png"
                        alt="Synapse Logo"
                        width={32}
                        height={32}
                        className="w-10 h-10 rounded-lg"
                    />
                    <div>
                        <p className="text-2xl text-white font-poppins font-bold">
                            Synapse
                        </p>
                        <p className="text-sm text-white/80 font-poppins">
                            Platform pembelajaran neuroanestesi untuk pemahaman
                            konseptual dan persiapan praktikum
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <Link
                        href="/"
                        className={`text-white font-poppins font-semibold hover:text-white/80 transition-colors ${
                            isActive("/") ? "border-b-2 border-white pb-1" : ""
                        }`}
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/about"
                        className={`text-white font-poppins font-semibold hover:text-white/80 transition-colors ${
                            isActive("/about")
                                ? "border-b-2 border-white pb-1"
                                : ""
                        }`}
                    >
                        Tentang
                    </Link>
                </div>
            </nav>
        </>
    );
}
