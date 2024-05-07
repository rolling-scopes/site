import { route } from '@/app/const';

export type Route = typeof route;

export type RouteValues = Exclude<Route[keyof Route], '*' | '/' | 'community'>;
