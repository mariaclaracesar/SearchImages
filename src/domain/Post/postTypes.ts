export interface UnsplashImage {
  id: string;
  created_at: string;
  updated_at: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    name: string;
    username: string;
    portfolio_url: string | null;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

export interface UnsplashSearchAPI {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
