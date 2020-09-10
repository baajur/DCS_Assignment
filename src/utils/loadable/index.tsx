import React, { Suspense, lazy } from 'react';
import {
    LazyLoadingSpinner,
    LazyLoadingSpinnerSizes,
} from 'components/LazyLoadingSpinner';

export interface FallbackOptions {
    size?: keyof typeof LazyLoadingSpinnerSizes;
    color? : string;
}

export const loadable = <T extends React.ComponentType<any>> (
    importDynamicFn: () => Promise<{ default: T }>,
    useFallback?: FallbackOptions
) => {
    const LazyComponent = lazy(importDynamicFn);

    let fallback: JSX.Element | null = null;
    if (useFallback) {
        fallback = <LazyLoadingSpinner
            size={useFallback.size}
            color={useFallback.color}
        />;
    }

    return (props: React.ComponentProps<T>): JSX.Element => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props}/>
        </Suspense>
    );
}