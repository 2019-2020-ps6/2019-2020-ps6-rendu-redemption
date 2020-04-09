import {Answer} from './answer.model';

export interface Question {
    id: number;
    quizId: number;
    imageId: number;
    label: string;
    answers: Answer[];
}
