export interface Question {
  text: string;
  expands: boolean;
}

export interface CardData {
  id: string;
  title: string;
  questions: Question[]; // original full card data has array
}

export interface DrawnCard {
  id: string;
  title: string;
  question: Question; // drawn card has single question
}

export type StressLevel = 'low' | 'high';
