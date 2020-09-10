import React from 'react';
import { connect } from 'react-redux';
import './MessageDisplay.scss';
import { MESSAGE_DISPLAY_DURATION_IN_MS, MessageTypes } from 'configs';
import { StoreState } from 'reducers';

interface MessageDisplayProps {
    content: string;
    type: MessageTypes;
    createdTime: number;
}

interface MessageDisplayState {
    show: boolean;
}

const INITIAL_STATE: MessageDisplayState = {
    show: false,
}

class MessageDisplay extends React.PureComponent<
    MessageDisplayProps,
    MessageDisplayState
> {
    state = INITIAL_STATE;
    hideTimeout: NodeJS.Timeout | null = null;

    componentDidUpdate(prevProps: MessageDisplayProps) {
        if (
            prevProps.createdTime !== this.props.createdTime
        ) {
            this.display();
        }
    }

    display = () => {
        if (!this.props.content) return;
        
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }

        this.setState({ show: true });

        this.hideTimeout = setTimeout(() => {
            this.setState({ show: false });
        }, MESSAGE_DISPLAY_DURATION_IN_MS);
    }

    render() {
        const { type, content } = this.props;
        const { show } = this.state;

        let className = 'MessageDisplay';
        let icon = '';

        if (type === MessageTypes.info) {
            icon = 'fas fa-info ';
            className += ' info';
        } else if (type === MessageTypes.error) {
            icon = 'fas fa-exclamation';
            className += ' error';
        } else if (type === MessageTypes.favorite) {
            icon = 'fas fa-star';
            className += ' favorite';
        } else if (type === MessageTypes.delete) {
            icon = 'fas fa-times';
            className += ' delete';
        } else if (type === MessageTypes.success) {
            icon = 'fas fa-check';
            className += ' success';
        }

        if (show) {
            className += ' show';
        }

        return (
            <div className={className}>
                <div className='inner'>
                    <p className='icon'>
                        <i className={icon}/>
                    </p>
                    <p className='content'>
                        {content}
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ message }: StoreState) => {
    return {
        content: message.content,
        type: message.type,
        createdTime: message.createdTime
    };
}

export default connect(
    mapStateToProps
)(MessageDisplay);