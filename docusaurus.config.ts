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

  url: 'https://andrew-leo-2024.github.io',
  baseUrl: '/ecosystem-docs/',

  organizationName: 'andrew-leo-2024',
  projectName: 'ecosystem-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 12,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'manifest', href: '/ecosystem-docs/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#2F3C7E' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        ],
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: { name: 'keywords', content: 'AINEFF, ecosystem, constitutional, governance, enterprise coordination, ORF protocol, atomic constraint' },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/andrew-leo-2024/ecosystem-docs/edit/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          tags: 'tags.yml',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Ecosystem Updates',
          blogDescription: 'Changelog and updates for the AINEFF Ecosystem documentation.',
          blogSidebarTitle: 'Recent Updates',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    metadata: [
      { name: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    announcementBar: {
      id: 'v1_launch',
      content: '<strong>AINEFF Ecosystem v1.1</strong> — 143 pages of constitutional infrastructure documentation.',
      backgroundColor: '#990011',
      textColor: '#FCF6F5',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgba(255, 255, 255, 0.9)',
        dark: 'rgba(13, 17, 23, 0.9)',
      },
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
        {
          type: 'docSidebar',
          sidebarId: 'processesSidebar',
          position: 'left',
          label: 'SOPs & Processes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides & Maps',
        },
        { to: '/docs/tags', label: 'Tags', position: 'right' },
        { to: '/blog', label: 'Updates', position: 'right' },
        { to: '/dashboard', label: 'Dashboard', position: 'right' },
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
        {
          title: 'Operations',
          items: [
            { label: 'SOPs & Processes', to: '/docs/processes/' },
            { label: 'Visual Guides & Maps', to: '/docs/guides/' },
            { label: 'Governance Dashboard', to: '/dashboard' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FrankMax Digital. The AINEFF Ecosystem.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'toml', 'sql', 'python', 'go'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
        },
      ],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
