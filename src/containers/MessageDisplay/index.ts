import { loadable } from 'utils';

export const MessageDisplay = loadable(
    () => import('./MessageDisplay')
);