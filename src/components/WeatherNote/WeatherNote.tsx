import moment from 'moment';
import React from 'react';
import './WeatherNote.scss';

interface SubmitEvent {
    preventDefault: () => any;
}

interface WeatherNoteProps {
    id?: string;
    content?: string;
    updatedTime?: number;
    onNewNoteSave?: (content: string) => any;
    onNoteUpdate?: (id: string, content: string) => any;
    onNoteDelete?: (id: string) => any;
};

interface WeatherNoteState {
    text: string;
    showForm: boolean;
}

const INITIAL_STATE: WeatherNoteState = {
    text: '',
    showForm: true,
}

class WeatherNote extends React.PureComponent<
    WeatherNoteProps,
    WeatherNoteState
> {
    state = INITIAL_STATE

    componentDidMount() {
        if (this.props.id) {
            this.setState({
                text: this.props.content || '',
                showForm: false
            });
        } else {
            this.setState({
                showForm: true
            });
        }
    }

    onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            text: e.target.value,
        });
    }

    onDeleteClick = () => {
        const { id, onNoteDelete } = this.props;

        if (id && onNoteDelete) {
            onNoteDelete(id);
        }
    }

    onCancelClick = () => {
        if (this.props.content) {
            this.setState({
                text: this.props.content,
                showForm: false
            });
        }
    }

    onEditClick = () => {
        this.setState({ showForm: true });
    }

    onSubmit = (e: SubmitEvent) => {
        e.preventDefault();

        const { text } = this.state;
        if (!text) return;

        const { id, onNewNoteSave, onNoteUpdate } = this.props;

        if (id) {
            if (onNoteUpdate) {
                onNoteUpdate(id, text);
                this.hideForm();
            }
        } else {
            if (onNewNoteSave) {
                onNewNoteSave(text);
                this.resetForm();
            }
        }
    }

    resetForm = () => {
        this.setState({ ...INITIAL_STATE });
    }

    hideForm = () => {
        this.setState({ showForm: false });
    }

    render() {
        const { content, id, updatedTime } = this.props;
        const { text, showForm } = this.state;

        const placeholder = id ?
            'Click "Cancel" to restore note...' :
            'Add a new note...';
        const timeString = updatedTime ?
            moment(updatedTime).local().format('DD MMM HH:mm') :
            '';

        return (
            <div className='WeatherNote'>
                <div className='inner'>
                    {!showForm && (
                        <div className='text'>
                            <p>"{content}"</p>
                            
                            <div className='bottom'>
                                <p className='time'>
                                    last update {timeString}
                                </p>
                                <button
                                    onClick={this.onEditClick}
                                >
                                    <i className='far fa-edit'/>
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {showForm && (
                        <form onSubmit={this.onSubmit}>
                            <textarea
                                placeholder={placeholder}
                                value={text}
                                onChange={this.onTextChange}
                            />
                            <div className='buttons'>
                                <div className='left'>
                                    {id && (
                                        <button
                                            className='delete'
                                            type='button'
                                            onClick={this.onDeleteClick}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>

                                <div className='right'>
                                    {id && (
                                        <button
                                            className='cancel'
                                            type='button'
                                            onClick={this.onCancelClick}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        className='submit'
                                        disabled={!text}
                                        type='submit'
                                        onClick={this.onSubmit}
                                    >
                                        {id ? 'Update' : 'Add'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    }
}

export default WeatherNote;