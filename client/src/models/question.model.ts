import {Answer} from './answer.model';

export interface Question {
  label: string;
  answers: Answer[];
}
