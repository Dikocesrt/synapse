import ExternalLearningResourceCard from "./ExternalLearningResourceItem";
import { externalLearningResourceService } from "@/src/services/external-learning-resource_service";

export default async function ExternalLearningResourceSection() {
    const externalLearningResources =
        await externalLearningResourceService.getAll();

    return (
        <div className="flex flex-col items-center py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
            <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-8">
                Sumber Belajar Eksternal
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {externalLearningResources.map((resource) => (
                    <ExternalLearningResourceCard
                        key={resource.id}
                        iconURL={resource.icon_url}
                        name={resource.name}
                        link={resource.link}
                    />
                ))}
            </div>
        </div>
    );
}
