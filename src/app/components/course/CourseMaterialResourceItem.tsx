import { CourseMaterialResource } from "@/src/types/course-material-resource_type";
import Image from "next/image";
import Link from "next/link";

interface CourseMaterialResourceItemProps {
    courseMaterialResource: CourseMaterialResource;
}

export default function CourseMaterialResourceItem({
    courseMaterialResource,
}: CourseMaterialResourceItemProps) {
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={courseMaterialResource.link}
            className="group flex items-center gap-2 border border-purpple rounded-lg px-4 py-2.5 hover:bg-purpple transition-colors"
        >
            <Image
                src={courseMaterialResource.icon_url}
                alt={courseMaterialResource.name}
                width={24}
                height={24}
                className="w-5 h-5 transition-all duration-300 group-hover:filter-[brightness(0)_invert(1)]"
            />
            <span className="text-sm text-purpple font-medium group-hover:text-white transition-colors">
                {courseMaterialResource.name}
            </span>
        </Link>
    );
}
