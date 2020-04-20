export interface Answer {
  id: number;
  questionId: number;
  quizId: number;
  value: string;
  imageId: number;
  isCorrect: boolean;
}
