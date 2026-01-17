import Image from "next/image";
import Link from "next/link";

interface ExternalLearningResourceCardProps {
    iconURL: string;
    name: string;
    link: string;
}

export default function ExternalLearningResourceCard({
    iconURL,
    name,
    link,
}: ExternalLearningResourceCardProps) {
    return (
        <Link
            href={link}
            className="group flex items-center gap-3 bg-white rounded-xl py-4 px-5 shadow-sm border border-gray-100 hover:border-green hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
            <Image
                src={iconURL}
                alt={name}
                width={24}
                height={24}
                className="w-5 h-5 text-green flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
            />

            <span className="font-poppins font-medium text-gray-800">
                {name}
            </span>
        </Link>
    );
}
