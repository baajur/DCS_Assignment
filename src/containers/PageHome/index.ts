import { loadable } from 'utils';

export const PageHome = loadable(
    () => import('./PageHome'),
    { size: 'medium' }
);