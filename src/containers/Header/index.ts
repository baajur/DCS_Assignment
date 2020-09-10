import { loadable } from 'utils';

export const Header = loadable(
    () => import('./Header'),
    { size: 'small' }
);