export type SearchResult = {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: string;
  comment_text?: string;
  num_comments: number;
  story_id?;
  story_title?;
  story_url?;
  parent_id?;
  created_at_i;
  [key: string]: any;
};
