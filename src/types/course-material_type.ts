import { CourseMaterialResource } from "./course-material-resource_type";

export interface CourseMaterial {
    id: string;
    name: string;
    description: string;
    from_meeting: number;
    to_meeting: number;
    course_id: string;
    course_material_resources: CourseMaterialResource[];
    created_at: string;
    updated_at?: string;
}
