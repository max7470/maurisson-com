// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chezmaurisson.com',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'nl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
