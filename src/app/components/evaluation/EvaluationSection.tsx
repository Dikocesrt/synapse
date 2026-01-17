import EvaluationItem from "./EvaluationItem";
import { evaluationService } from "@/src/services/evaluation_service";

export default async function EvaluationSection() {
    const evaluations = await evaluationService.getAll();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
            {evaluations?.map((evaluation) => (
                <EvaluationItem key={evaluation.id} evaluation={evaluation} />
            ))}
        </div>
    );
}
