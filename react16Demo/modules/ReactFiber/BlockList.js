import React from 'react';

class BlockList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let divs = [];
        for (let i = 0; i < this.props.numberOfDotList; i++) {
            divs.push(<div key={i}>{this.props.displayNumber}</div>);
        }
        return <div>{divs}</div>;
    }
}

export default BlockList