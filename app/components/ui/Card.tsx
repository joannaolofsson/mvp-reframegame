import React from 'react';
import styles from './Card.module.css'

export interface CardProps {
    title: string;
    description: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Card({
    title,
    description,
    onClick,
    disabled = false,
}: CardProps) {

  return (
    <div className={styles.card} onClick={onClick} aria-disabled={disabled}>
      <h3>CardTitle</h3>
      <p>Description</p>
    </div>
  )
}
