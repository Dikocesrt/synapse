import { prisma } from "../lib/prisma";
import { Course } from "../types/course";

export const courseService = {
    async getAll(): Promise<Course[]> {
        return await prisma.courses.findMany({
            orderBy: {
                created_at: "asc",
            },
        });
    },

    async getById(id: string): Promise<Course | null> {
        return await prisma.courses.findUnique({
            where: {
                id,
            },
            include: {
                instructor: {
                    select: {
                        full_name: true,
                    },
                },
            },
        });
    },
};
