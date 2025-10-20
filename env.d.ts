declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    NEXT_PUBLIC_RS_APP_API_BASE_URL: string;
    NEXT_PUBLIC_CONTENTFUL_API_BASE_URL: string;
    NEXT_PUBLIC_YOUTUBE_API_BASE_URL: string;
    NEXT_PUBLIC_YOUTUBE_API_KEY: string;
    LOG_QUERY: string;
  }
}
