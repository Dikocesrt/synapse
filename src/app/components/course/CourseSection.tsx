import CourseCard from "./CourseCard";
import { courseService } from "@/src/services/course_service";

export default async function CourseSection() {
    const courses = await courseService.getAll();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    credits={course.credits}
                    name={course.name}
                    description={course.description}
                />
            ))}
        </div>
    );
}
