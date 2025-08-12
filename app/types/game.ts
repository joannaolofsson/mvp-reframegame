export interface Question {
  text: string;
  expands: boolean; // true = expands world, false = shrinks world
}

export interface Case {
  id: string;
  title: string;
  questions: Question[];
}

export interface Belief {
  id: string;
  title: string;
  questions: Question[];
}

export interface Situation {
  id: string;
  title: string;
  questions: Question[];
}

export type StressLevel = 'low' | 'high';
