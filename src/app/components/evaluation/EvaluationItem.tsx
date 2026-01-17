import { Evaluation } from "@/src/types/evaluation_type";
import Link from "next/link";

interface EvaluationItemProps {
    evaluation: Evaluation;
}

export default function EvaluationItem({ evaluation }: EvaluationItemProps) {
    // Cek apakah evaluation aktif (default: false jika null/undefined)
    const isActive = evaluation.is_active ?? false;

    return isActive ? (
        // Jika AKTIF: tampilkan dengan link
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="p-6 flex flex-col flex-grow items-center text-center mt-24">
                <h2 className="text-xl font-bold mb-3">{evaluation.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {evaluation.description}
                </p>
                <Link
                    href={evaluation.link ?? "#"}
                    className="block w-auto px-8 bg-green text-white text-center font-semibold py-3 rounded-full hover:bg-green/90 transition-colors"
                >
                    {evaluation.button_text ?? "Mulai"}
                </Link>
            </div>
        </div>
    ) : (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent flex flex-col opacity-70">
            <div className="p-6 flex flex-col flex-grow items-center text-center mt-24">
                <h2 className="text-xl font-bold mb-3">{evaluation.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {evaluation.description}
                </p>
                <span className="inline-flex items-center gap-2 w-auto px-8 bg-gray-400 text-white text-center font-semibold py-3 rounded-full cursor-not-allowed select-none">
                    Coming Soon
                </span>
            </div>
        </div>
    );
}
