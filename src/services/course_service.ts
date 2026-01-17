import { prisma } from "../lib/prisma";
import { Course } from "../types/course_type";

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
                instructors: true,
                course_outcomes: true,
                course_materials: {
                    include: {
                        course_material_resources: true,
                    },
                    orderBy: {
                        from_meeting: "asc",
                    },
                },
            },
        });
    },
};
