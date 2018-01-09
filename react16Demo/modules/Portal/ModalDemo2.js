import React from 'react';
import Modal from './Modal';
// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class ModalDemo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // This will fire when the button in Child is clicked,
        // updating Parent's state, even though button
        // is not direct descendant in the DOM.
        e.stopPropagation();
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}

function Child() {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}
export default ModalDemo2;