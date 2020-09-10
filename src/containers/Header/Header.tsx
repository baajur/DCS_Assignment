import React from 'react';
import { connect } from 'react-redux';
import {
    withRouter,
    RouteComponentProps
} from 'react-router-dom';
import './Header.scss';
import { ROUTES } from 'configs';
import HeaderButton from './HeaderButton';
import { getIsGeolocationAvailable } from './selectors';
import { TemperatureSwitch } from 'components/TemperatureSwitch';
import { StoreState } from 'reducers';

interface HeaderProps extends RouteComponentProps {
    isGeolocationAvailable: boolean;
};

interface HeaderState {
    mobileShow: boolean;
}

const INITIAL_STATE = {
    mobileShow: false,
}

class Header extends React.PureComponent<
    HeaderProps,
    HeaderState
> {
    state = INITIAL_STATE;
    contentRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
    }

    componentDidUpdate(prevProps: HeaderProps) {
        if (
            !prevProps.isGeolocationAvailable &&
            this.props.isGeolocationAvailable
        ) this.props.history.push(ROUTES.location.path);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    handleDocumentClick = (e: MouseEvent) => {
        if (!this.state.mobileShow) return;

        if (
            this.contentRef &&
            this.contentRef.current &&
            e.target &&
            !this.contentRef.current.contains(e.target as Node)
        ) {
            this.setState({ mobileShow: false });
        }
    }

    onMenuButtonClick = () => {
        this.setState(({ mobileShow }) => ({
            mobileShow: !mobileShow
        }));
    }

    onButtonClick = () => {
        this.setState({ mobileShow: false });
    }

    render() {
        const { mobileShow } = this.state;
        const { pathname } = this.props.location;

        let className = 'Header';
        if (mobileShow) className += ' show-on-mobile';

        return (
            <div className={className}>
                <div className='container'>
                    <div
                        className='inner'
                        ref={this.contentRef}
                    >
                        <div className='menu'>
                            <div className='paths'>
                                <HeaderButton
                                    {...ROUTES.home}
                                    isActive={ROUTES.home.path === pathname}
                                    onClick={this.onButtonClick}
                                />
                                <HeaderButton
                                    {...ROUTES.location}
                                    isActive={ROUTES.location.path === pathname}
                                    onClick={this.onButtonClick}
                                />
                            </div>

                            <TemperatureSwitch/>
                        </div>
    
                        <button
                            className='menu-button'
                            onClick={this.onMenuButtonClick}
                        >
                            <i className='fas fa-bars'/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        isGeolocationAvailable: getIsGeolocationAvailable(state)
    }
}

export default connect(
    mapStateToProps
)(withRouter(Header));