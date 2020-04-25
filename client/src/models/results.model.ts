export interface Results {
  id: number;
  wrongQuestions: number;
  skippedQuestions: number;
  createdAt?: Date;
  updatedAt?: Date;
  guestId: number;
  quizId: number;
  questionResults: QuestionResults[];
}

export interface QuestionResults {
  wrongAnswers: number;
  skipped: boolean;
  questionId: number;
}

