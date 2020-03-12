import { SearchResult } from "./";

export type SearchResultsArray = {
  hits: SearchResult[];
  nbHits: number;
  page: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
};
