import React from 'react';
import { connect } from 'react-redux';
import './SearchWeatherResults.scss';
import {
    getSearchResultSelector,
    getIsFavoriteSelector,
} from './selectors';
import { Slide } from 'components/Slide';
import { WeatherPanel } from 'components/WeatherPanel';
import {
    addSearchToWeatherList,
    removeFromFavorite,
} from 'actions';
import { StoreState } from 'reducers';
import { TypeOpenWeatherData } from 'apis';

interface SearchWeatherResultsProps {
    searchTerm: string;
    result: TypeOpenWeatherData | null;
    isFavorite: boolean;
    loading: boolean;
    onResultClick: (cityId: number, cityName?: string) => any;
    addSearchToWeatherList: (searchTerm: string) => any;
    removeFromFavorite: (cityId: number, cityName?: string) => any;
}

class SearchWeatherResults extends React.PureComponent<
    SearchWeatherResultsProps
> {
    onPanelClick = (cityId: number) => {
        this.addSearchResultToList();
        this.props.onResultClick(cityId);
    }

    onFavoriteClick = (cityId: number, turnOn: boolean, cityName?: string) => {
        if (turnOn) {
            this.addSearchResultToList();
        } else {
            this.props.removeFromFavorite(cityId, cityName);
        }
    }

    addSearchResultToList = () => {
        const { searchTerm, addSearchToWeatherList } = this.props;
        addSearchToWeatherList(searchTerm);
    }

    render() {
        const { result, isFavorite, loading, searchTerm } = this.props;
        const showContent = !!(!loading && searchTerm);
        return (
            <Slide
                show={showContent}
                className='SearchWeatherResults'
            >
                <div className='inner'>
                    {!result && (
                        <p className='no-data'>
                            No data is found...
                        </p>
                    )}
                    {result && (
                        <WeatherPanel
                            data={result}
                            isFavorite={isFavorite}
                            toggleFavorite={this.onFavoriteClick}
                            onPanelClick={this.onPanelClick}
                        />
                    )}
                </div>
            </Slide>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        searchTerm: state.search.currentSearchTerm,
        result: getSearchResultSelector(state),
        isFavorite: getIsFavoriteSelector(state),
        loading: state.search.loading,
    }
};

const mapDispatchToProps = {
    addSearchToWeatherList,
    removeFromFavorite,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchWeatherResults);