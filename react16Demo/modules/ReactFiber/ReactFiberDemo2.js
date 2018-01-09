//import React from 'react';
import BlockList from './BlockList';

const NUMBER_OF_BLOCK = 100000;

class ReactFiberDemo2 extends React.Component {
    constructor() {
        super();
        this.state = { timesOfButtonClicked: 0 };
    }

    _addTimesOfButtonClicked() {
        const {timesOfButtonClicked} = this.state;
        ReactDOMFiber.unstable_deferredUpdates(() =>
            this.setState(
                {timesOfButtonClicked: timesOfButtonClicked + 1})
        ); }

    render() {
        const {timesOfButtonClicked} = this.state;
        return [
            <input type="text"/>,
            <button onClick={this._addTimesOfButtonClicked.bind(this)}>
                Click Me
            </button>,
            <BlockList displayNumber={timesOfButtonClicked}
                       numberOfDotList={NUMBER_OF_BLOCK}/>
        ]
    }
};

export default ReactFiberDemo2
