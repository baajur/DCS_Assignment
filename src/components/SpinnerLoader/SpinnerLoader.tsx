import React, { memo } from 'react';
import { Properties } from 'csstype';
import { PulseLoader, ClipLoader } from 'react-spinners';
import './SpinnerLoader.scss';
import { Fade } from 'components/Fade';

export enum SpinnerLoaderTypes {
    circle = 'circle'
}

export enum SpinnerLoaderPositions {
    top = 'top',
    bottom = 'bottom',
}

export interface SpinnerLoaderProps {
    type?: keyof typeof SpinnerLoaderTypes;
    show?: boolean;
    size?: number;
    color?: string;
    duration?: number;
    style?: Properties;
    coverScreen?: boolean;
    transparent?: boolean;
    message?: string;
    position?: keyof typeof SpinnerLoaderPositions;
}

const SpinnerLoader: React.SFC<SpinnerLoaderProps> = ({
    type,
    show,
    message,
    size, 
    color,
    duration,
    style,
    coverScreen,
    transparent,
    position,
}) => {
    let className = 'SpinnerLoader';

    if (coverScreen) {
        className += ' cover-screen';
    }

    if (transparent) {
        className += ' transparent';
    }

    if (position === SpinnerLoaderPositions.top) {
        className += ' top';
    } else if (position === SpinnerLoaderPositions.bottom) {
        className += ' bottom';
    }

    let Tag, loaderSize;

    switch(type) {
        case SpinnerLoaderTypes.circle:
            Tag = ClipLoader;
            loaderSize = 40;
            break;
        default:
            Tag = PulseLoader;
            loaderSize = 7;
    }

    return (
        <Fade
            className={className}
            show={show}
            duration={duration}
            style={style}
            display='flex'
        >
            <Tag
                size={size || loaderSize}
                color={color || 'white'}
            />
            {message && (
                <p className='message'>
                    {message}
                </p>
            )}
        </Fade>
    );
}

export default memo(SpinnerLoader);