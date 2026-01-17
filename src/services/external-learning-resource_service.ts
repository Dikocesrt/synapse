import { prisma } from "../lib/prisma";
import { ExternalLearningResource } from "../types/external-learning-resource_type";

export const externalLearningResourceService = {
    async getAll(): Promise<ExternalLearningResource[]> {
        const data = await prisma.external_learning_resources.findMany({
            orderBy: {
                created_at: "asc",
            },
        });
        return data as ExternalLearningResource[];
    },
};
