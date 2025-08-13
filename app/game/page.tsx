'use client'
import React, { useState, useEffect } from 'react'
import { cases } from '../data/cases';
import { beliefs } from '../data/beliefs';
import { situations } from '../data/situations';
import { drawRandomCard, calculateScore, getWorldChange } from '../lib/gameLogic';
import styles from './page.module.css';
import Label from '../components/ui/Label';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import WorldResult from '../components/WorldResult';
import { DrawnCard } from '../types/game';
import WorldMeter from '../components/WorldMeter';

export default function MvpGame() {
    const [caseCard, setCaseCard] = useState<DrawnCard | null>(null);
    const [beliefCard, setBeliefCard] = useState<DrawnCard | null>(null);
    const [situationCard, setSituationCard] = useState<DrawnCard | null>(null);
    const [stress, setStress] = useState<'low' | 'high'>('low');
    const [worldChange, setWorldChange] = useState<{ change: string; amount: number } | null>(null);

    function handleDraw() {
        const c = drawRandomCard(cases);
        const b = drawRandomCard(beliefs);
        const s = drawRandomCard(situations);

        setCaseCard(c);
        setBeliefCard(b);
        setSituationCard(s);
    }

    useEffect(() => {
        if (caseCard && beliefCard && situationCard) {
            const score = calculateScore([caseCard, beliefCard, situationCard], stress);
            setWorldChange(getWorldChange(score));
        }
    }, [caseCard, beliefCard, situationCard, stress]);


    return (
        <div className={styles.gameContainer}>
            <div className={styles.selectWrapper}>
                <Label text='Stress filter' />
                <select value={stress} onChange={e => setStress(e.target.value as 'low' | 'high')}>
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className={styles.buttonWrapper}>
                <Button onClick={handleDraw} variant="primary" size="md">
                    Draw Cards
                </Button>
            </div>
            <div className={styles.cardWrapper}>
                <h3 className={styles.drawnHeading}>Drawn Cards</h3>

                <div className={styles.cardItem}>
                    {caseCard && (
                        <Card title='' description='' className={styles.cardReveal}>
                            <h4 className={styles.cardHeading}>Case: {caseCard.title}</h4>
                            <p>Question: {caseCard.question.text}</p>
                        </Card>
                    )}
                </div>

                <div className={styles.cardItem}>
                    {beliefCard && (
                        <Card title='' description='' className={styles.cardReveal}>
                            <h4 className={styles.cardHeading}>Belief: {beliefCard.title}</h4>
                            <p><span className={styles.subHeading}>Question:</span> {beliefCard.question.text}</p>
                        </Card>
                    )}
                </div>

                <div className={styles.cardItem}>
                    {situationCard && (
                        <Card title='' description='' className={styles.cardReveal}>
                            <h4 className={styles.cardHeading}>Situation: {situationCard.title}</h4>
                            <p>Question: {situationCard.question.text}</p>
                        </Card>
                    )}
                </div>
            </div>

            <div className={styles.worldChangeWrapper}>
                <h3 className={styles.worldHeading}>World Result:</h3>

                {worldChange && (
                    <>
                        <WorldResult
                            change={worldChange.change as 'expand' | 'shrink' | 'neutral'}
                            amount={worldChange.amount}
                        />
                        <WorldMeter
                            change={worldChange.change as 'expand' | 'shrink' | 'neutral'}
                            amount={worldChange.amount}
                        />

                    </>
                )}
            </div>
        </div>
    )
}
