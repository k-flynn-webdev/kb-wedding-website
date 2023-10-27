export const inputDelay: number = 250;

export const API_ROUTE = (type: string, resource?: string): string =>
  resource ? `/api/${type}/${resource}/` : `/api/${type}/`;
