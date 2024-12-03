import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pagefind from "astro-pagefind";

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
  site: 'https://nature-transition.fr',
  base: '/',
});
