import React from 'react'
import styles from './WorldMeter.module.css'

interface WorldMeterProps {
  change: 'expand' | 'shrink' | 'neutral'
  amount: number // positive or negative score
}

export default function WorldMeter({ change, amount }: WorldMeterProps) {
  // Map amount to a 0–100% scale, with 50% as neutral
  const normalized = Math.max(0, Math.min(100, 50 + amount * 10))

  return (
    <div className={styles.meterWrapper}>
      <div className={styles.meterTrack}>
        <div
          className={`${styles.meterFill} ${styles[change]}`}
          style={{ width: `${normalized}%` }}
        />
      </div>
      <p className={styles.label}>
        {change === 'expand' && '🌱 Expanding World'}
        {change === 'shrink' && '🪶 Shrinking World'}
        {change === 'neutral' && '⚖️ Balanced World'}
      </p>
    </div>
  )
}
