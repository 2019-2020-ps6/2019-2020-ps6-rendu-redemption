export interface Answer {
  id: number;
  questionId: number;
  quizId: number;
  value: string;
  isCorrect: boolean;
}
