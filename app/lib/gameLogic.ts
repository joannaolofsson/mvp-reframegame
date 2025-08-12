import { Case, Belief, Situation, Question, StressLevel } from '../types/game';

export interface DrawnItem {
  title: string;
  question: Question;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function drawCase(cases: Case[]): DrawnItem {
  const c = pickRandom(cases);
  const q = pickRandom(c.questions);
  return { title: c.title, question: q };
}

export function drawBelief(beliefs: Belief[]): DrawnItem {
  const b = pickRandom(beliefs);
  const q = pickRandom(b.questions);
  return { title: b.title, question: q };
}

export function drawSituation(situations: Situation[]): DrawnItem {
  const s = pickRandom(situations);
  const q = pickRandom(s.questions);
  return { title: s.title, question: q };
}

export function calculateScore(draws: DrawnItem[], stressLevel: StressLevel): number {
  let score = 0;

  draws.forEach(d => {
    score += d.question.expands ? 1 : -1;
  });

  if (stressLevel === 'high') {
    score = Math.round(score * 1.5);
  }

  return score;
}

export function getWorldChange(score: number) {
  if (score > 0) return { change: 'expand', amount: score };
  if (score < 0) return { change: 'shrink', amount: Math.abs(score) };
  return { change: 'neutral', amount: 0 };
}
