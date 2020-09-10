import { loadable } from 'utils';

export const PageLocation = loadable(
    () => import('./PageLocation'),
    { size: 'medium' }
);