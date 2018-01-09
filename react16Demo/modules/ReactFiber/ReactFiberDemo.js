import React from 'react';
import BlockList from './BlockList';

const NUMBER_OF_BLOCK = 100000;
//const appRoot = document.getElementById('app-root');

class ReactFiberDemo extends React.Component {
    constructor() {
        super();
        this.state = { timesOfButtonClicked: 0 };
    }

    _addTimesOfButtonClicked() {
        const { timesOfButtonClicked } = this.state;
        this.setState({ timesOfButtonClicked: timesOfButtonClicked + 1 });
    }

    render() {
        const { timesOfButtonClicked } = this.state;
        return (
            <div>
                <input type="text" />
                <button onClick={this._addTimesOfButtonClicked.bind(this)}>
                    Click Me
                </button>
                <BlockList
                    displayNumber={timesOfButtonClicked}
                    numberOfDotList={NUMBER_OF_BLOCK}
                />
            </div>
        );
    }
}

export default ReactFiberDemo
