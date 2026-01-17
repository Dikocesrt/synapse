import { CourseMaterial } from "@/src/types/course-material_type";
import CourseMaterialResourceSection from "./CourseMaterialResourceSection";

interface CourseMaterialItemProps {
    courseMaterial?: CourseMaterial;
}

export default function CourseMaterialItem({
    courseMaterial,
}: CourseMaterialItemProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purpple mx-auto mt-6">
            <div className="flex w-fit items-center gap-3 mb-4 rounded-lg bg-gradient-to-br from-purpple to-purpple/70 px-4 py-1">
                <p className="font-poppins text-white font-semibold text-[12px]">
                    PERTEMUAN {courseMaterial?.from_meeting}
                    {"-"}
                    {courseMaterial?.to_meeting}
                </p>
            </div>

            <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {courseMaterial?.name}
            </h3>

            <p className="text-gray-500 pb-4 border-b border-gray-200">
                {courseMaterial?.description}
            </p>

            {/* Bahan Ajar */}
            <CourseMaterialResourceSection
                courseMaterialResources={
                    courseMaterial?.course_material_resources
                }
            />
        </div>
    );
}
