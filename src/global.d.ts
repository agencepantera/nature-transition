declare module 'astro:html' {
  interface HTMLAttributes {
    'data-repo'?: string;
    'data-repo-id'?: string;
    'data-category'?: string;
    'data-category-id'?: string;
    'data-mapping'?: string;
    'data-strict'?: string;
    'data-reactions-enabled'?: string;
    'data-emit-metadata'?: string;
    'data-input-position'?: string;
    'data-theme'?: string;
    'data-lang'?: string;
    'data-loading'?: string;
    crossorigin?: string;
    async?: boolean;
  }
}
