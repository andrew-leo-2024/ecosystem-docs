import React from 'react';
import type { ReactNode } from 'react';

const CALLOUT_STYLES: Record<string, { border: string; bg: string; icon: string; label: string }> = {
  'atomic-constraint': {
    border: '#990011',
    bg: 'rgba(153, 0, 17, 0.08)',
    icon: '\u269B\uFE0F',
    label: 'Atomic Constraint',
  },
  constitutional: {
    border: '#2F3C7E',
    bg: 'rgba(47, 60, 126, 0.08)',
    icon: '\uD83D\uDCDC',
    label: 'Constitutional Provision',
  },
  'kill-criterion': {
    border: '#dc2626',
    bg: 'rgba(220, 38, 38, 0.08)',
    icon: '\uD83D\uDEA8',
    label: 'Kill Criterion',
  },
  irreversible: {
    border: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.08)',
    icon: '\u26A0\uFE0F',
    label: 'Irreversible Action',
  },
};

interface GovernanceCalloutProps {
  type: 'atomic-constraint' | 'constitutional' | 'kill-criterion' | 'irreversible';
  children: ReactNode;
}

export default function GovernanceCallout({ type, children }: GovernanceCalloutProps): React.ReactElement {
  const style = CALLOUT_STYLES[type] ?? CALLOUT_STYLES.constitutional;
  return (
    <div
      style={{
        borderLeft: `4px solid ${style.border}`,
        background: style.bg,
        padding: '1rem 1.25rem',
        borderRadius: '0 8px 8px 0',
        margin: '1.5rem 0',
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.85rem' }}>
        {style.icon} {style.label}
      </div>
      <div style={{ fontSize: '0.95rem' }}>{children}</div>
    </div>
  );
}
