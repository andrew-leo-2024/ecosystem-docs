import React from 'react';
import Link from '@docusaurus/Link';

interface CrossReferenceProps {
  to: string;
  title: string;
  description?: string;
  badge?: string;
}

export default function CrossReference({ to, title, description, badge }: CrossReferenceProps): React.ReactElement {
  return (
    <Link to={to} style={{ textDecoration: 'none', display: 'block', marginBottom: '0.75rem' }}>
      <div
        className="cross-reference-card"
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid var(--ifm-toc-border-color)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <strong style={{ fontSize: '0.9rem' }}>{title}</strong>
          {badge && (
            <span
              style={{
                fontSize: '0.7rem',
                padding: '0.1rem 0.4rem',
                borderRadius: '3px',
                background: 'var(--ifm-color-primary)',
                color: '#fff',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {badge}
            </span>
          )}
        </div>
        {description && (
          <div style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.25rem' }}>{description}</div>
        )}
      </div>
    </Link>
  );
}
