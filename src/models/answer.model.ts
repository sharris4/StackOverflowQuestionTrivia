import { User } from './user.model';

export class Answer {
    answer_id: number;
    body_markdown: string;
    is_accepted: boolean;
    title: string;
    score: number;
    owner: User;
}
