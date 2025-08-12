'use client'
import React, { useState } from 'react'
import { cases } from '../data/cases';
import { beliefs } from '../data/beliefs';
import { situations } from '../data/situations';
import { drawCase, drawBelief, drawSituation, calculateScore, getWorldChange } from '../lib/gameLogic';

export default function MvpGame() {
  const [caseCard, setCaseCard] = useState<any>(null)
  const [beliefCard, setBeliefCard] = useState<any>(null)
  const [situationCard, setSituationCard] = useState<any>(null)
  const [stress, setStress] = useState<'low' | 'high'>('low')
  const [worldChange, setWorldChange] = useState<{ change: string; amount: number } | null>(null)

  function handleDraw() {
    const c = drawCase(cases)
    const b = drawBelief(beliefs)
    const s = drawSituation(situations)

    setCaseCard(c)
    setBeliefCard(b)
    setSituationCard(s)

    const score = calculateScore([c, b, s], stress)
    setWorldChange(getWorldChange(score))
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h2>The Reframe Game — MVP</h2>

      <div style={{ marginBottom: 10 }}>
        <label>Stress level: </label>
        <select value={stress} onChange={e => setStress(e.target.value as 'low' | 'high')}>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>

      <button onClick={handleDraw} style={{ padding: '8px 12px', cursor: 'pointer' }}>
        Draw Cards
      </button>

      {caseCard && (
        <div style={{ marginTop: 20 }}>
          <h3>Case: {caseCard.title}</h3>
          <p>Question: {caseCard.question.text}</p>

          <h3>Belief: {beliefCard.title}</h3>
          <p>Question: {beliefCard.question.text}</p>

          <h3>Situation: {situationCard.title}</h3>
          <p>Question: {situationCard.question.text}</p>

          <h3>World Result:</h3>
          {worldChange && (
            <p>
              {worldChange.change === 'neutral'
                ? 'World stays the same.'
                : `World ${worldChange.change}s by ${worldChange.amount}`}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
