import React, { memo } from 'react';
import GoogleMap from 'google-map-react';
import './LocationMap.scss';
import {
    GOOGLE_MAP_KEY,
    GOOGLE_MAP_DEFAULT_ZOOM_LEVEL
} from 'configs';

interface LocationCoordsProps {
    lat: number | null;
    lng: number | null;
}

const LocationMap = ({ lat, lng }: LocationCoordsProps) => {
    if (lat === null || lng === null) return null;
    return (
        <div className='LocationMap'>
            <GoogleMap
                bootstrapURLKeys={{
                    key: GOOGLE_MAP_KEY
                }}
                defaultCenter={{ lat, lng }}
                defaultZoom={GOOGLE_MAP_DEFAULT_ZOOM_LEVEL}
            />
        </div>
    );
}

export default memo(LocationMap);