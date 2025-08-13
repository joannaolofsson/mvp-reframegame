import { Question, StressLevel, CardData, DrawnCard } from '../types/game';

export interface DrawnItem {
  title: string;
  question: Question;
}

export function drawRandomCard(deck: CardData[]): DrawnCard {
  const card = deck[Math.floor(Math.random() * deck.length)];
  const question = card.questions[Math.floor(Math.random() * card.questions.length)];
  return { id: card.id, title: card.title, question };
}

export function calculateScore(draws: DrawnCard[], stress: StressLevel): number {
  let score = 0;
  draws.forEach(d => {
    score += d.question.expands ? 1 : -1;
  });

  if (stress === 'high') {
    score -= 1; // or whatever your rule is
  }
  return score;
}

export function getWorldChange(score: number) {
  if (score > 0) return { change: 'expand', amount: score };
  if (score < 0) return { change: 'shrink', amount: Math.abs(score) };
  return { change: 'neutral', amount: 0 };
}
