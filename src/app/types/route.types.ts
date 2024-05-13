import { ROUTES } from '@/app/const';

export type Route = typeof ROUTES;

export type RouteValues = Exclude<Route[keyof Route], '*' | '/' | 'community'>;
