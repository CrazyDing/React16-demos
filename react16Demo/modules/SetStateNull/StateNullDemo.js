import React from 'react';

class StateNullDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {city:''}
    }
    handleClick(e) {
        const newValue = e.target.value;
        this.setState((state)=> {

            if (state.city === newValue) {
                return null;
            }
            return {city: newValue}
        })
    }

    render(){
        console.log('================render===============');
        return (
            <div>
                <button onClick={this.handleClick.bind(this)} value="南京">南京</button>
                <button onClick={this.handleClick.bind(this)} value="北京">北京</button>
                <div>
                    {this.state.city}
                </div>
            </div>
        )
    }
}
export default StateNullDemo;
