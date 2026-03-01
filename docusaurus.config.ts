import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AINEFF Ecosystem',
  tagline: 'Constitutional Economic Coordination Protocol — From Atomic Constraint to Civilization-Scale Infrastructure',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ecosystem.frankmax.digital',
  baseUrl: '/',

  organizationName: 'frankmax-digital',
  projectName: 'ecosystem',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AINEFF Ecosystem',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'visionSidebar',
          position: 'left',
          label: '40,000ft Vision',
        },
        {
          type: 'docSidebar',
          sidebarId: 'blueprintSidebar',
          position: 'left',
          label: '20,000ft Blueprint',
        },
        {
          type: 'docSidebar',
          sidebarId: 'entitiesSidebar',
          position: 'left',
          label: '10,000ft Entities',
        },
        {
          type: 'docSidebar',
          sidebarId: 'systemsSidebar',
          position: 'left',
          label: '5,000ft Systems',
        },
        {
          type: 'docSidebar',
          sidebarId: 'productsSidebar',
          position: 'left',
          label: '1,000ft Products',
        },
        {
          type: 'docSidebar',
          sidebarId: 'executionSidebar',
          position: 'left',
          label: 'Execution',
        },
        {
          type: 'docSidebar',
          sidebarId: 'architectureSidebar',
          position: 'left',
          label: 'Architecture',
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeSidebar',
          position: 'left',
          label: 'Knowledge',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Macro View',
          items: [
            { label: 'Vision & Philosophy', to: '/docs/vision/' },
            { label: 'Ecosystem Blueprint', to: '/docs/blueprint/' },
            { label: 'Entities & Platforms', to: '/docs/entities/' },
          ],
        },
        {
          title: 'Operational View',
          items: [
            { label: 'Systems & Modules', to: '/docs/systems/' },
            { label: 'Products & Revenue', to: '/docs/products/' },
            { label: 'Execution & Operations', to: '/docs/execution/' },
          ],
        },
        {
          title: 'Micro View',
          items: [
            { label: 'Technical Architecture', to: '/docs/architecture/' },
            { label: 'Knowledge Substrate', to: '/docs/knowledge/' },
            { label: 'Glossary', to: '/docs/glossary' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FrankMax Digital. The AINEFF Ecosystem.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
