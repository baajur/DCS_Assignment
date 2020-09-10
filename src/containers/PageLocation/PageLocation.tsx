import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import './PageLocation.scss';
import { WeatherDetail } from 'components/WeatherDetail';
import { SpinnerLoader } from 'components/SpinnerLoader';
import { LocationMap } from 'components/LocationMap';
import { fetchLocationWeather } from 'actions';
import { APP_NAME } from 'configs';
import { StoreState } from 'reducers';
import { TypeOpenWeatherData } from 'apis';

interface PageLocationProps {
    granted: boolean | null;
    latitude: number | null;
    longitude: number | null;
    weatherData: TypeOpenWeatherData | null;
    loading: boolean;
    error: boolean;
    fetchLocationWeather: Function;
}

class PageLocation extends React.PureComponent<PageLocationProps> {
    componentDidMount() {
        this.scrollToTop();
        this.fetchWeather();
    }

    componentDidUpdate(prevProps: PageLocationProps) {
        if (
            prevProps.latitude === null &&
            this.props.latitude !== null
        ) {
            this.fetchWeather();
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    isGeolocationAvailable = () => {
        const { granted, latitude, longitude } = this.props;

        return granted &&
            latitude !== null &&
            longitude !== null;
    }

    fetchWeather = () => {
        if (!this.isGeolocationAvailable()) return;
        
        this.props.fetchLocationWeather();
    }

    renderAskForPermission = () => {
        return (
            <div className='ask-permission'>
                <h4><i className='far fa-frown'/></h4>
                <p>
                    You need to grant location permission to use this feature
                </p>
            </div>
        );
    };

    render() {
        const {
            granted,
            latitude,
            longitude,
            weatherData,
            loading
        } = this.props;

        return (
            <div className='Page PageLocation'>
                <Helmet>
                    <title>My Location | {APP_NAME}</title>
                </Helmet>

                <SpinnerLoader
                    type='circle'
                    show={granted === null || loading}
                />

                <div className='inner'>
                    {granted === false && this.renderAskForPermission()}

                    {granted && weatherData && (
                        <WeatherDetail
                            data={weatherData}
                        />
                    )}

                    <LocationMap
                        lat={latitude}
                        lng={longitude}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        granted: state.geolocation.granted,
        latitude: state.geolocation.latitude,
        longitude: state.geolocation.longitude,
        weatherData: state.geolocation.weatherData,
        loading: state.geolocation.loading,
        error: state.geolocation.error
    }
}

const mapDispatchToProps = {
    fetchLocationWeather
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLocation);