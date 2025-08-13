// components/WorldResult.tsx
import React from 'react';

interface Props {
  change: 'expand' | 'shrink' | 'neutral';
  amount: number;
}

export default function WorldResult({ change, amount }: Props) {
  let label = '';
  let className = '';

  switch (change) {
    case 'expand':
      label = `World expands by ${amount}`;
      className = 'worldExpand';
      break;
    case 'shrink':
      label = `World shrinks by ${amount}`;
      className = 'worldShrink';
      break;
    default:
      label = 'World stays the same';
      className = 'worldNeutral';
      break;
  }

  return <p className={`worldChange ${className}`}>{label}</p>;
}
