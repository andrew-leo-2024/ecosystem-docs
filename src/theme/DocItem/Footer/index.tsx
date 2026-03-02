import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function FooterWrapper(props: React.ComponentProps<typeof Footer>): React.ReactElement {
  const { metadata } = useDoc();
  const { frontMatter } = metadata;

  const status = frontMatter.custom_status as string | undefined;
  const owner = frontMatter.custom_owner as string | undefined;
  const lastReview = frontMatter.custom_last_review as string | undefined;
  const nextReview = frontMatter.custom_next_review as string | undefined;

  const hasLifecycleData = status || owner || lastReview || nextReview;

  return (
    <>
      {hasLifecycleData && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '1rem 0',
            marginTop: '2rem',
            borderTop: '1px solid var(--ifm-toc-border-color)',
            fontSize: '0.8rem',
            opacity: 0.75,
          }}
        >
          {status && (
            <div>
              <strong>Status:</strong> {status}
            </div>
          )}
          {owner && (
            <div>
              <strong>Owner:</strong> {owner}
            </div>
          )}
          {lastReview && (
            <div>
              <strong>Last Review:</strong> {lastReview}
            </div>
          )}
          {nextReview && (
            <div>
              <strong>Next Review:</strong> {nextReview}
            </div>
          )}
        </div>
      )}
      <Footer {...props} />
    </>
  );
}
