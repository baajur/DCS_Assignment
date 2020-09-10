import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import { PageHome } from 'containers/PageHome';
import { PageDetail } from 'containers/PageDetail';
import { PageLocation } from 'containers/PageLocation';
import { MessageDisplay } from 'containers/MessageDisplay';
import { Header } from 'containers/Header';
import { initGeolocation, addNewMessage } from 'actions';
import { TemperatureUnitContext } from 'context';
import { ROUTES } from 'configs';

interface AppProps {
    initGeolocation: Function,
    addNewMessage: Function,
}

interface AppState {
    isCelcius: boolean;
}

class App extends React.PureComponent<AppProps, AppState> {
    state: AppState = { isCelcius: true }

    componentDidMount() {
        this.props.initGeolocation();
    }

    toggleTempUnit = () => {
        this.setState(({ isCelcius }) => ({ isCelcius: !isCelcius }));
    }

    render() {
        return (
            <TemperatureUnitContext.Provider
                value={{
                    isCelcius: this.state.isCelcius,
                    toggleTempUnit: this.toggleTempUnit
                }}
            >
                <div className='App'>
                    <Router basename={process.env.PUBLIC_URL}>
                        <Header/>
                        <MessageDisplay/>
                        <Switch>
                            <Route
                                path={ROUTES.detail.path}
                                component={PageDetail}
                            />
                            <Route
                                path={ROUTES.location.path}
                                component={PageLocation}
                            />
                            <Route
                                path={ROUTES.home.path}
                                component={PageHome}
                            />
                        </Switch>
                    </Router>
                </div>
            </TemperatureUnitContext.Provider>
        );
    }
}

const mapDispatchToProps = {
    initGeolocation,
    addNewMessage
}

export default connect(
    null,
    mapDispatchToProps
)(App);