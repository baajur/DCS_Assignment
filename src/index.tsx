import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Root } from 'containers/Root';
import { App } from 'containers/App';

export interface DomRenderer {
    render: ReactDOM.Renderer,
};

export const renderToDom = (dom: DomRenderer, doc: Document) => {
    dom.render(
        (
            <Root>
                <App/>
            </Root>
        ), doc.querySelector('#root') || doc.createElement('div')
    );
};

renderToDom(ReactDOM, document);

serviceWorker.register();
