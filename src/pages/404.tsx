import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound(): React.ReactElement {
  return (
    <Layout title="Page Not Found">
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '500px' }}>
          This page doesn&apos;t exist in the ecosystem. Navigate back to documented territory.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link className="button button--primary button--lg" to="/docs/vision/">
            40,000ft Vision
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/guides/reading-guide">
            Reading Guide
          </Link>
          <Link className="button button--outline button--lg" to="/docs/glossary">
            Glossary
          </Link>
        </div>
      </main>
    </Layout>
  );
}
