import { User } from './user.model';

export class Question {
    question_id: number;
    answer_count: number;
    title: string;
    owner: User;
}
