import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/vision/">
            Start at 40,000ft
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/execution/30-day-plan"
            style={{color: '#FCF6F5', borderColor: '#FCF6F5'}}>
            30-Day Action Plan
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/glossary"
            style={{color: '#FCF6F5', borderColor: '#FCF6F5'}}>
            Glossary
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="AINEFF Ecosystem Documentation"
      description="Constitutional Economic Coordination Protocol — 535,856+ lines of strategy consolidated into navigable documentation from 40,000ft to microscopic detail.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
