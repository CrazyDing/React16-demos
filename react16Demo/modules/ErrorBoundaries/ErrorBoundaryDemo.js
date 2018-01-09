import React from 'react';
import ErrorBoundary from './components/ErrrorBoundary';
import BuggyCounter from './components/BuggyCounter';

class ErrorBoundaryDemo extends React.Component{
    render(){
        return (
            <div>
                <p>
                    <b>
                        This is an example of error boundaries in React 16.
                        <br /><br />
                        Click on the numbers to increase the counters.
                        <br />
                        The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
                    </b>
                </p>
                <hr />
                <p>以下两个计数器被包含在同一个ErrorBoundary下，当其中一个发生异常了，ErrorBoundary将替换他们两个组件</p>
                <ErrorBoundary>
                    <BuggyCounter />
                    <BuggyCounter />
                </ErrorBoundary>
                <hr />
                <p>以下两个计数器分别包含在各自的ErrorBoundary下，因此当其中一个发生异常了，另外一个将毫无影响。</p>
                <ErrorBoundary><BuggyCounter /></ErrorBoundary>
                <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            </div>
        );
    }
}
export default ErrorBoundaryDemo
