import { CourseMaterialResource } from "@/src/types/course-material-resource_type";
import CourseMaterialResourceItem from "./CourseMaterialResourceItem";

interface CourseMaterialResourceSectionProps {
    courseMaterialResources?: CourseMaterialResource[];
}

export default function CourseMaterialResourceSection({
    courseMaterialResources,
}: CourseMaterialResourceSectionProps) {
    return (
        <div className="flex flex-wrap gap-3 mt-4">
            {courseMaterialResources?.map((courseMaterialResource) => (
                <CourseMaterialResourceItem
                    key={courseMaterialResource.id}
                    courseMaterialResource={courseMaterialResource}
                />
            ))}
        </div>
    );
}
