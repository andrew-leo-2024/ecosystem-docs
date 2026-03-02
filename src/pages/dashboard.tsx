import React from 'react';
import Layout from '@theme/Layout';

const SECTIONS = [
  { name: 'Vision (40,000ft)', path: 'vision', count: 10 },
  { name: 'Blueprint (20,000ft)', path: 'blueprint', count: 8 },
  { name: 'Entities (10,000ft)', path: 'entities', count: 11 },
  { name: 'Systems (5,000ft)', path: 'systems', count: 11 },
  { name: 'Products (1,000ft)', path: 'products', count: 20 },
  { name: 'Execution (Ground)', path: 'execution', count: 17 },
  { name: 'Architecture (Micro)', path: 'architecture', count: 19 },
  { name: 'Knowledge (Substrate)', path: 'knowledge', count: 10 },
  { name: 'SOPs & Processes', path: 'processes', count: 24 },
  { name: 'Guides & Maps', path: 'guides', count: 12 },
];

const TOTAL = SECTIONS.reduce((sum, s) => sum + s.count, 0);

function Bar({ value, max }: { value: number; max: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
      <div
        style={{
          flex: 1,
          height: '20px',
          borderRadius: '4px',
          background: 'var(--ifm-color-emphasis-200)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: '100%',
            background: 'var(--ifm-color-primary)',
            borderRadius: '4px',
            transition: 'width 0.5s ease',
          }}
        />
      </div>
      <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '3rem', textAlign: 'right' }}>
        {value} docs
      </span>
    </div>
  );
}

export default function Dashboard(): React.ReactElement {
  return (
    <Layout title="Governance Dashboard" description="Documentation coverage overview">
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <h1>Governance Dashboard</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
          Documentation coverage across the AINEFF Ecosystem — <strong>{TOTAL} pages</strong> across{' '}
          <strong>{SECTIONS.length} sections</strong>.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', width: '35%' }}>Section</th>
                <th style={{ textAlign: 'left' }}>Coverage</th>
              </tr>
            </thead>
            <tbody>
              {SECTIONS.map((s) => (
                <tr key={s.path}>
                  <td>
                    <a href={`/ecosystem-docs/docs/${s.path}/`}>{s.name}</a>
                  </td>
                  <td>
                    <Bar value={s.count} max={Math.max(...SECTIONS.map((x) => x.count))} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '8px',
            background: 'var(--ifm-color-emphasis-100)',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Summary</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ifm-color-primary)' }}>{TOTAL}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>Total Pages</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ifm-color-primary)' }}>
                {SECTIONS.length}
              </div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>Sections</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ifm-color-primary)' }}>363</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>Mermaid Diagrams</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ifm-color-primary)' }}>21</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>SOPs</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
