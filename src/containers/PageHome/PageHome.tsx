import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './PageHome.scss';
import {
    fetchWeatherList,
    addToFavorite,
    removeWeatherFromList,
    removeFromFavorite,
} from 'actions';
import { getArrangedWeatherSelector } from './selectors';
import { StoreState } from 'reducers';
import { TypeOpenWeatherData } from 'apis';
import { SearchWeatherInput } from 'containers/SearchWeatherInput';
import { SearchWeatherResults } from 'containers/SearchWeatherResults';
import { WeatherPanel } from 'components/WeatherPanel';
import { SpinnerLoader } from 'components/SpinnerLoader';
import { ROUTES, APP_NAME } from 'configs';

interface PageHomeProps extends RouteComponentProps {
    list: TypeOpenWeatherData[],
    favorites: {[cityId: string]: boolean};
    loading: boolean;
    error: boolean;
    fetchWeatherList: () => any,
    removeWeatherFromList: (cityId: number, cityName?: string) => any,
    addToFavorite: (cityId: number, cityName?: string) => any,
    removeFromFavorite: (cityId: number, cityName?: string) => any,
}

class PageHome extends React.PureComponent<PageHomeProps> {
    componentDidMount() {
        this.scrollToTop();
        this.props.fetchWeatherList();
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    onPanelClick = (cityId: number) => {
        this.props.history.push(`${ROUTES.detail.base}/${cityId}`);
    }

    toggleFavorite = (cityId: number, turnOn: boolean, cityName?: string) => {
        if (turnOn) {
            this.props.addToFavorite(cityId, cityName);
        } else {
            this.props.removeFromFavorite(cityId, cityName);
        }
    }

    render() {
        const {
            loading,
            list,
            favorites,
            removeWeatherFromList,
        } = this.props;

        return (
            <div className='Page PageHome'>

                <Helmet>
                    <title>Home | {APP_NAME}</title>
                </Helmet>

                <div className='inner'>
                    <SearchWeatherInput/>
                    <SearchWeatherResults
                        onResultClick={this.onPanelClick}
                    />

                    <div className='weather-list'>
                        {list.map(cityData => {
                            const { id } = cityData;
                            return (
                                <WeatherPanel
                                    key={id}
                                    data={cityData}
                                    isFavorite={favorites[id]}
                                    onPanelClick={this.onPanelClick}
                                    toggleFavorite={this.toggleFavorite}
                                    onDeleteClick={removeWeatherFromList}
                                />
                            );
                        })}
                    </div>

                    <SpinnerLoader
                        show={loading}
                        type='circle'
                        coverScreen
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    const { weather, favorites } = state;
    
    return {
        list: getArrangedWeatherSelector(state),
        loading: weather.loading,
        error: weather.error,
        favorites,
    }
}

const mapDispatchToProps = {
    fetchWeatherList,
    addToFavorite,
    removeFromFavorite,
    removeWeatherFromList,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHome);