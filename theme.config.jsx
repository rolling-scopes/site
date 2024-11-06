import { Footer, Header } from './src/core/base-layout/components';

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: <span>My Nextra Documentation</span>,
  project: { link: 'https://github.com/shuding/nextra' },
  navbar: { component: <Header /> },
  footer: { component: <Footer /> },
  darkMode: false,
};
