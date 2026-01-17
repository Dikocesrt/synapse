import { CourseOutcome } from "@/src/types/course-outcome_type";

interface CourseOutcomeItemProps {
    courseOutcome?: CourseOutcome;
}

export default function CourseOutcomeItem({
    courseOutcome,
}: CourseOutcomeItemProps) {
    return (
        <div className="border-b-2 py-2 border-gray-200 mb-2">
            <p className="font-poppins text-gray-600">{courseOutcome?.name}</p>
        </div>
    );
}
