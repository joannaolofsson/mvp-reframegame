import React from 'react';
import styles from './Label.module.css';

export interface LabelProps {
  text: string;
  htmlFor?: string;
  className?: string;
}

export default function Label({
  text,
  htmlFor,
  className = ''
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {text}
    </label>
  );
}
