import { Api } from '@/core/api/app-api';

export const api = new Api(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_API_BASE_URL,
);
