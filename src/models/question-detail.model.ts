import { Answer } from './answer.model';
import { User } from './user.model';

export class QuestionDetail {
    title: string;
    body_markdown: string;
    owner: User;
    // answers: Answer[];
}
