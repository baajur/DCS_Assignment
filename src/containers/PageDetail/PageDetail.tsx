import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import './PageDetail.scss';
import {
    getDetailDataSelector,
    getNotesSelector,
} from './selectors';
import {
    fetchWeatherDetail,
    addNewNote,
    updateNote,
    deleteNote,
} from 'actions';
import { ROUTES, APP_NAME } from 'configs';
import { WeatherDetail } from 'components/WeatherDetail';
import { WeatherNote } from 'components/WeatherNote';
import { StoreState } from 'reducers';
import { TypeOpenWeatherData, TypeNote } from 'apis';
import { SpinnerLoader } from 'components/SpinnerLoader';

export interface PageDetailProps extends RouteComponentProps {
    data: TypeOpenWeatherData | null;
    loading: boolean;
    notes: TypeNote[];
    fetchWeatherDetail: (cityId: number) => any;
    addNewNote: (cityId: number, content: string) => any;
    updateNote: (cityId: number, noteId: string, content: string) => any;
    deleteNote: (cityId: number, noteId: string) => any;
}

class PageDetail extends React.PureComponent<PageDetailProps> {
    componentDidMount() {
        this.scrollToTop();
        this.fetch();
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    getCityId = (): number | undefined => {
        const { match } = this.props;
        const { cityId } = match.params as { cityId?: string };
        return Number(cityId);
    }

    fetch = () => {
        const { data } = this.props;
        const cityId = this.getCityId();

        if (!cityId || data) return;

        this.props.fetchWeatherDetail(cityId);
    }

    onNewNoteSave = (content: string) => {
        const cityId = this.getCityId();
        
        if (!cityId || !content) return;
        
        this.props.addNewNote(cityId, content);
    }

    onNoteUpdate = (id: string, content: string) => {
        const cityId = this.getCityId();
        if (!cityId || !content) return;

        this.props.updateNote(cityId, id, content);
    }

    onNoteDelete = (id: string) => {
        const cityId = this.getCityId();
        if (!cityId) return;

        this.props.deleteNote(cityId, id);
    }

    renderNoData = () => {
        return (
            <div className='no-data'>
                <h4 className='icon'>
                    <i className='far fa-frown'/>
                </h4>
                <h4 className='message'>
                    Sorry, no data is found
                </h4>
                <Link
                    to={ROUTES.home.path}
                    className='go-to-home'
                >
                    Back to home page
                </Link>
            </div>
        );
    }

    render() {
        const { data, loading, notes } = this.props;
        const pageName = data ? data.name : 'Details';

        return (
            <div className='Page PageDetail'>
                <Helmet>
                    <title>{pageName} | {APP_NAME}</title>
                </Helmet>

                <SpinnerLoader
                    show={loading}
                    type='circle'
                />
                <div className='inner'>
                    {!data && !loading && this.renderNoData()}

                    {data && (
                        <div className='content'>
                            <WeatherDetail
                                data={data}
                            />

                            <div className='notes'>
                                <h3>
                                    Your notes:
                                </h3>

                                {notes.map(note => {
                                    return (
                                        <WeatherNote
                                            key={note.id}
                                            {...note}
                                            onNoteUpdate={this.onNoteUpdate}
                                            onNoteDelete={this.onNoteDelete}
                                        />
                                    );
                                })}
                                
                                <WeatherNote
                                    key='new-note'
                                    onNewNoteSave={this.onNewNoteSave}
                                />
                            </div>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state: StoreState, props: PageDetailProps) => {
    return {
        data: getDetailDataSelector(state, props),
        loading: state.weather.detailLoading,
        notes: getNotesSelector(state, props),
    }
}

const mapDispatchToProps = {
    fetchWeatherDetail,
    addNewNote,
    updateNote,
    deleteNote,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageDetail);