import React, { memo } from 'react';
import CSS from 'csstype';
import { Transition } from 'react-transition-group';
import { TransitionPhases } from 'styles/types';

export interface FadeProps {
    show?: boolean;
    children?: React.ReactNode;
    className?: string;
    duration?: number;
    tag?: React.ReactType;
    style?: CSS.Properties;
    display?: string;
    forwardedRef?: (element: HTMLElement) => void;
}

const Fade: React.SFC<FadeProps> = (props) => {
    const {
        show,
        children,
        className = '',
        duration = 300,
        tag = 'div',
        style = {},
        display = 'block',
        forwardedRef,
        ...otherProps
    } = props;

    const Tag = tag;
    const tagClassName = `Fade ${className}`;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
        display: 'none',
    };
    const transitionStyles = {
        entering: { opacity: 0, display },
        entered: { opacity: 1, display },
        exiting: { opacity: 0, display },
        exited: { opacity: 0, display: 'none' },
    };

    const timeout = {
        enter: 0,
        exit: duration
    };

    return (
        <Transition in={show} timeout={timeout}>
            {(state: TransitionPhases): JSX.Element => {
                return (
                    <Tag
                        ref={forwardedRef}
                        className={tagClassName}
                        style={{
                            ...style,
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                        {...otherProps}
                    >
                        {children}
                    </Tag>
                );
            }}
        </Transition> 
    );
}

export default memo(Fade);

