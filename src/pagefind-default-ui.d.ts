declare module '@pagefind/default-ui' {
  export interface PagefindUIOptions {
    element: string;
    showImages?: boolean;
    translations?: Record<string, string>;
    settings?: {
      showImages?: boolean;
      showEmptyFilters?: boolean;
      resetStyles?: boolean;
    };
  }

  export default class PagefindUI {
    constructor(options: PagefindUIOptions);
  }
}
