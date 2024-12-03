import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pagefind from "astro-pagefind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize(item) {
        return {
          url: item.url,
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        };
      }
    }),
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
});
