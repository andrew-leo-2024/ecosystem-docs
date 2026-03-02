import React from 'react';

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  draft: { bg: '#6b7280', color: '#fff' },
  review: { bg: '#d97706', color: '#fff' },
  approved: { bg: '#059669', color: '#fff' },
  active: { bg: '#2F3C7E', color: '#fff' },
  planned: { bg: '#7c3aed', color: '#fff' },
};

interface StatusBadgeProps {
  status: 'draft' | 'review' | 'approved' | 'active' | 'planned';
}

export default function StatusBadge({ status }: StatusBadgeProps): React.ReactElement {
  const style = STATUS_COLORS[status] ?? STATUS_COLORS.draft;
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.15rem 0.6rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        backgroundColor: style.bg,
        color: style.color,
      }}
    >
      {status}
    </span>
  );
}
