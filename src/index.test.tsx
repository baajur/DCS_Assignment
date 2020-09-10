import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import { renderToDom, DomRenderer } from './index';
import { App } from 'containers/App';

jest.mock('react-dom', (): DomRenderer => ({
    render: jest.fn()
}));

// google-map-react library has problem 
// with peer devdependency when running in test environment

jest.mock('google-map-react', () => {
    const { TestComponent } = jest.requireActual('tests/TestComponent');

    return TestComponent;
});

describe('/index', (): void => {
    let wrapper: ShallowWrapper;
    let fn = ReactDOM.render as jest.Mock;

    beforeEach(function(): void {
        fn.mockReset();
        fn.mockImplementation((child: JSX.Element): void => {
            wrapper = shallow(child);
        });
    });

    it('should call ReactDOM.render()', function(): void {
        renderToDom(ReactDOM, document);
        expect(fn.mock.calls).toHaveLength(1);
    });

    it('should pass in component App', function(): void {
        expect(wrapper.find(App).length).toEqual(1);
    });
});