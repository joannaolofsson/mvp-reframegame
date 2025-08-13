import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  onClick,
  children,
  disabled = false,
  className
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${className || ''}`}
      onClick={onClick}
      aria-disabled={disabled}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div className={styles.cardContent}>{children}</div>}
    </div>
  );
}
