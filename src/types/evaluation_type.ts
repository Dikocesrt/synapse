export interface Evaluation {
    id: string;
    title: string;
    description: string;
    link?: string;
    button_text?: string;
    is_active: boolean;
    created_at: string;
    updated_at?: string;
}
