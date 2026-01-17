import { CourseMaterial } from "./course-material_type";
import { CourseOutcome } from "./course-outcome_type";
import { Instructor } from "./instructor_type";

export interface Course {
    id: string;
    name: string;
    credits: number;
    description: string;
    instructor_id: string;
    instructors: Instructor;
    course_materials?: CourseMaterial[];
    course_outcomes?: CourseOutcome[];
    created_at: string;
    updated_at?: string;
}
