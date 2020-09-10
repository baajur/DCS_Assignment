import { loadable } from 'utils';

export const PageDetail = loadable(
    () => import('./PageDetail'),
    { size: 'medium' }
);