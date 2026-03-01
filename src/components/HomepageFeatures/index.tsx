import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type ZoomLevel = {
  altitude: string;
  title: string;
  description: string;
  link: string;
  color: string;
  items: string[];
};

const ZoomLevels: ZoomLevel[] = [
  {
    altitude: '40,000 ft',
    title: 'Vision & Philosophy',
    description: 'The grand vision, atomic constraint, core DNA, and centi-trillion thesis.',
    link: '/docs/vision/',
    color: '#2F3C7E',
    items: ['Atomic Constraint', 'Core DNA', 'Inevitability Framework', 'Compounding Engine'],
  },
  {
    altitude: '20,000 ft',
    title: 'Ecosystem Blueprint',
    description: 'Entity hierarchy, 7-layer control model, 22 platforms, 15 coordination systems.',
    link: '/docs/blueprint/',
    color: '#3E4DA4',
    items: ['Entity Hierarchy', '7-Layer Control', '22 Platforms', '3-Domain Strategy'],
  },
  {
    altitude: '10,000 ft',
    title: 'Entities & Platforms',
    description: 'AINEFF, AINEF OS, AINEG, AINE, Frankmax, LevelUpMax, ORF Protocol.',
    link: '/docs/entities/',
    color: '#5566BB',
    items: ['AINEFF Constitutional', 'AINEF OS Factory', 'Frankmax Governance', 'LevelUpMax Talent'],
  },
  {
    altitude: '5,000 ft',
    title: 'Systems & Modules',
    description: '74 systems across 21 core + framework + factory + group + enterprise layers.',
    link: '/docs/systems/',
    color: '#6B7ACC',
    items: ['21 Core Systems', '8 Skills Systems', '15 Frankmax Systems', 'Factory Byproducts'],
  },
  {
    altitude: '1,000 ft',
    title: 'Products & Revenue',
    description: '25+ revenue streams, 6 market wedges, pricing architecture, monetization rules.',
    link: '/docs/products/',
    color: '#990011',
    items: ['DocuFlow Agent', 'Billing Leakage', 'PIAR', 'IP Licensing'],
  },
  {
    altitude: 'Ground',
    title: 'Execution & Operations',
    description: '7-phase progression, 90-day sprint, founder discipline, kill criteria.',
    link: '/docs/execution/',
    color: '#CC3333',
    items: ['7 Phases', '30-Day Plan', 'Risk Register', 'Financial Model'],
  },
  {
    altitude: 'Microscopic',
    title: 'Technical Architecture',
    description: 'Agent taxonomy, protocol architecture, memory systems, deployment infrastructure.',
    link: '/docs/architecture/',
    color: '#444',
    items: ['80+ Agent Patterns', 'PCP vs PEP', 'EMS Architecture', 'Skills System'],
  },
  {
    altitude: 'Substrate',
    title: 'Knowledge Foundation',
    description: 'Thinking tools, knowledge containers, belief systems, human progression model.',
    link: '/docs/knowledge/',
    color: '#666',
    items: ['60+ Thinking Tools', 'M-Shaped Mind', 'Learning Taxonomy', 'Agentic UX'],
  },
];

function ZoomLevelCard({altitude, title, description, link, color, items}: ZoomLevel) {
  return (
    <div className={clsx('col col--3')} style={{marginBottom: '1.5rem'}}>
      <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="feature-card">
          <span
            style={{
              display: 'inline-block',
              padding: '0.2rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              background: color,
              color: '#FCF6F5',
            }}>
            {altitude}
          </span>
          <Heading as="h3" style={{fontSize: '1.1rem', marginTop: '0.5rem'}}>
            {title}
          </Heading>
          <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)'}}>
            {description}
          </p>
          <ul style={{fontSize: '0.8rem', paddingLeft: '1.2rem', margin: 0}}>
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

function Stats() {
  const stats = [
    {value: '535,856+', label: 'Lines of Strategy'},
    {value: '38', label: 'Source Documents'},
    {value: '74', label: 'Systems Designed'},
    {value: '22', label: 'Platforms Sequenced'},
    {value: '80+', label: 'Agent Patterns'},
    {value: '8', label: 'Interlocking Entities'},
    {value: '25+', label: 'Revenue Streams'},
    {value: '7', label: 'Evolution Phases'},
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        padding: '3rem 0',
        background: 'var(--ifm-background-surface-color)',
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
        borderBottom: '1px solid var(--ifm-color-emphasis-200)',
      }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{textAlign: 'center', minWidth: '120px'}}>
          <div
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--ifm-color-primary)',
              fontFamily: 'Georgia, serif',
            }}>
            {stat.value}
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--ifm-color-emphasis-600)',
            }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <Stats />
      <section style={{padding: '3rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <Heading as="h2">Explore Every Layer</Heading>
            <p style={{color: 'var(--ifm-color-emphasis-600)', maxWidth: '600px', margin: '0 auto'}}>
              From 40,000ft bird's eye vision down to microscopic technical architecture.
              Eight zoom levels covering the complete AINEFF Ecosystem.
            </p>
          </div>
          <div className="row">
            {ZoomLevels.map((props, idx) => (
              <ZoomLevelCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '3rem 0',
          background: 'linear-gradient(135deg, #2F3C7E 0%, #1a1a2e 100%)',
          color: '#FCF6F5',
          textAlign: 'center',
        }}>
        <div className="container">
          <Heading as="h2" style={{color: '#FCF6F5'}}>
            The Atomic Constraint
          </Heading>
          <blockquote
            style={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              maxWidth: '800px',
              margin: '1.5rem auto',
              lineHeight: 1.7,
              borderLeft: '4px solid #990011',
              paddingLeft: '1.5rem',
              color: 'rgba(252, 246, 245, 0.9)',
            }}>
            "No system may execute an irreversible action unless a single, identifiable human
            liability bearer is bound to that action at execution time."
          </blockquote>
          <p style={{color: 'rgba(252, 246, 245, 0.7)', fontSize: '0.9rem'}}>
            This is the ORF kernel from which all governance derives. Everything else is commentary.
          </p>
        </div>
      </section>
    </>
  );
}
