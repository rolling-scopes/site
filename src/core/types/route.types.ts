import { type ROUTES } from '@/core/const';

export type Route = typeof ROUTES;

export type RouteValues = Exclude<Route[keyof Route], '*' | '/' | 'docs/en'>;
