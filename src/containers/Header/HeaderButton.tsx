import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface HeaderButtonProps {
    name: string;
    path: string;
    isActive: boolean;
    onClick: () => any;
}

const HeaderButton = ({
    name,
    path,
    isActive,
    onClick
}: HeaderButtonProps) => {
    let className = 'HeaderButton';
    if (isActive) className += ' active';

    return (
        <Link
            to={path}
            className={className}
            onClick={onClick}
        >
            {name}
        </Link>
    );
}

export default memo(HeaderButton);