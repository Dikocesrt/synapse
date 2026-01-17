import { prisma } from "../lib/prisma";
import { Evaluation } from "../types/evaluation_type";

export const evaluationService = {
    async getAll(): Promise<Evaluation[]> {
        const data = await prisma.evaluations.findMany({
            orderBy: {
                created_at: "asc",
            },
        });
        return data as Evaluation[];
    },
};
