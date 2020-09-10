import React, { memo } from 'react';
import { PuffLoader } from 'react-spinners';

export enum LazyLoadingSpinnerSizes {
    large = 'large',
    medium = 'medium',
    small = 'small'
};

function getSpinnerSize(size?: string): number {
    if (size === LazyLoadingSpinnerSizes.large) {
        return 70;
    } else if (size === LazyLoadingSpinnerSizes.medium) {
        return 50;
    } else {
        return 30;
    }
}

export interface LazyLoadingSpinnerProps {
    size?: keyof typeof LazyLoadingSpinnerSizes;
    color? : string;
}

export const _LazyLoadingSpinner = ({ size, color }: LazyLoadingSpinnerProps) => {

    return (
        <PuffLoader
            css="margin: 0 5px;"
            size={getSpinnerSize(size)}
            color={color || 'white'}
        />
    );
}

export const LazyLoadingSpinner = memo(_LazyLoadingSpinner);