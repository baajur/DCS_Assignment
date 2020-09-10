import { loadable } from 'utils';

export const Temperature = loadable(
    () => import('./Temperature'),
    { size: 'small' }
);