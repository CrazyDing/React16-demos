import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <ul>
                <li><Link to="/errorBoundary">1、优雅的错误处理ErrorBoundaries</Link></li>
                <li><Link to="/returnsDemo">2、render方法新增返回类型</Link></li>
                <li><Link to="/portalDemo">3、使用createPortal将组件渲染到当前组件树之外 demo1</Link></li>
                <li><Link to="/portalDemo2">&nbsp;&nbsp;&nbsp;使用createPortal将组件渲染到当前组件树之外 demo2</Link></li>
                <li><Link to="/stateNullDemo">4、setState传入null时不会再触发更新</Link></li>
                <li><Link to="/reactFiberDemo">5、从 React 到 React Fiber</Link></li>
                <li><Link to="/reactFiberDemo2">&nbsp;&nbsp;&nbsp;从 React 到 React Fiber</Link></li>
            </ul>
        )
    }
}
export default App