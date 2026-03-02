import React from 'react';

const ALTITUDE_COLORS: Record<string, { bg: string; label: string }> = {
  '40k': { bg: '#2F3C7E', label: '40,000ft — Vision' },
  '20k': { bg: '#3E4DA4', label: '20,000ft — Blueprint' },
  '10k': { bg: '#5566BB', label: '10,000ft — Entities' },
  '5k': { bg: '#6B7ACC', label: '5,000ft — Systems' },
  '1k': { bg: '#990011', label: '1,000ft — Products' },
  ground: { bg: '#CC3333', label: 'Ground — Execution' },
  micro: { bg: '#444444', label: 'Micro — Architecture' },
  substrate: { bg: '#666666', label: 'Substrate — Knowledge' },
};

interface AltitudeBadgeProps {
  level: '40k' | '20k' | '10k' | '5k' | '1k' | 'ground' | 'micro' | 'substrate';
}

export default function AltitudeBadge({ level }: AltitudeBadgeProps): React.ReactElement {
  const alt = ALTITUDE_COLORS[level] ?? ALTITUDE_COLORS['40k'];
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.2rem 0.6rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        backgroundColor: alt.bg,
        color: '#FCF6F5',
        marginBottom: '0.5rem',
      }}
    >
      {alt.label}
    </span>
  );
}
