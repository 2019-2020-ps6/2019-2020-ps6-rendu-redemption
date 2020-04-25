export interface Results {
  id: number;
  guestId: number;
  quizId: number;
  timedOut: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  questionResults: QuestionResults[];
}

export interface QuestionResults {
  answers: number[];
  skipped: boolean;
  questionId: number;
}

