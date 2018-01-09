import React from 'react';

class ReturnsDemo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            vlaues : ['hello world!',123,true,null,[
                                                    <div key="1">hello</div>,
                                                    <span key="2">world</span>,
                                                    <p key="3">oh</p>
                                                    ]]
        }
    }
    render(){
        return (
            <div>
                <p>返回一段字符串：</p>
                <ReturnString />
                <p>返回数字：</p>
                <ReturnNum />
                <p>返回Boolean：</p>
                <ReturnBoolean />
                <p>返回Null：</p>
                <ReturnNull />
                <p>返回fragments(带有key属性的数组)：</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <ReturnFragments />
                </ul>
            </div>
        )
    }
}
function ReturnString(){
    return 'hello world!';
}
function ReturnNum(){
    return 123;
}
function ReturnBoolean(){
    return true;
}
function ReturnNull(){
    return null;
}
function ReturnFragments(){
    return [
        <li key="4">4</li>,
        <li key="5">5</li>,
        <li key="6">6</li>
    ];
}

export default ReturnsDemo
