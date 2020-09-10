import _debounce from 'lodash/debounce';
import React from 'react';
import { connect } from 'react-redux';
import './SearchWeatherInput.scss';
import { searchByCity, resetSearch } from 'actions';
import { SEARCH_DEBOUNCE_TIME_IN_MS } from 'configs';
import { SpinnerLoader } from 'components/SpinnerLoader';
import { COLORS } from 'styles';
import { StoreState } from 'reducers';

interface SearchWeatherInputProps {
    loading: boolean;
    searchByCity: (searchTerm: string) => any;
    resetSearch: () => any;
}

interface SearchWeatherInputState {
    inputValue: string;
}

const INITIAL_STATE: SearchWeatherInputState = {
    inputValue: ''
}

class SearchWeatherInput extends React.PureComponent<
    SearchWeatherInputProps,
    SearchWeatherInputState
> {
    state = INITIAL_STATE;

    componentDidMount() {
        this.reset();
    }

    componentWillUnmount() {
        this.reset();
    }

    reset = () => {
        this.setState(INITIAL_STATE);
        this.props.resetSearch();
    }

    search = _debounce((searchTerm: string) => {
        this.props.searchByCity(searchTerm.toLowerCase());
    }, SEARCH_DEBOUNCE_TIME_IN_MS);

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value });
        this.search(e.target.value);
    }

    onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    }

    render() {
        const { loading } = this.props;
        const { inputValue } = this.state;

        return (
            <div className='SearchWeatherInput'>
                <div className='inner'>
                    <input
                        placeholder='find your city here...'
                        value={inputValue}
                        onChange={this.onInputChange}
                        onFocus={this.onInputFocus}
                    />
                    <i className='fas fa-search'/>
                </div>
                <SpinnerLoader
                    show={loading}
                    transparent
                    type='circle'
                    color={COLORS.aqua_darker}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ search }: StoreState) => {
    return {
        loading: search.loading
    }
};

const mapDispatchToProps = {
    searchByCity,
    resetSearch,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchWeatherInput);