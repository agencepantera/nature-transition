import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pagefind from "astro-pagefind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    mdx(),
    pagefind({
      indexing: {
        verbose: true,
        rootSelector: 'body',
        excludeSelectors: ['nav', 'header', 'footer'],
        customFields: [
          {
            field: 'category',
            selector: 'article',
            resolveValue: (node) => node.dataset.category,
          },
          {
            field: 'tags',
            selector: 'article',
            resolveValue: (node) => node.dataset.tags,
          }
        ]
      }
    })
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
  site: 'https://nature-transition.fr',
  base: '/',
});
