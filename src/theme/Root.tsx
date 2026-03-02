import React from 'react';
import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';

export default function Root({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AINEFF Ecosystem Documentation',
            url: 'https://andrew-leo-2024.github.io/ecosystem-docs/',
            description:
              'Constitutional Economic Coordination Protocol — From Atomic Constraint to Civilization-Scale Infrastructure',
            publisher: {
              '@type': 'Organization',
              name: 'FrankMax Digital',
            },
          })}
        </script>
      </Head>
      {children}
    </>
  );
}
