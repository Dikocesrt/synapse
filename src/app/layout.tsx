import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Synapse",
    description:
        "Platform pembelajaran neuroanestesi untuk pemahaman konseptual dan persiapan praktikum",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body>
                <div className="w-full mx-auto">
                    <Navbar />

                    {children}

                    <Footer />
                </div>
            </body>
        </html>
    );
}
