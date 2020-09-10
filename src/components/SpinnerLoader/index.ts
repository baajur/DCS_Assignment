import { loadable } from 'utils';

export const SpinnerLoader = loadable(
    () => import('./SpinnerLoader'),
    { size: 'small' }
);
