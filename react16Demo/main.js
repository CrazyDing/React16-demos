import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, IndexLink  } from 'react-router-dom';
import { createHistory, createHashHistory, useBasename } from 'history';
import App from './modules/App';
import ErrorBoundary from './modules/ErrorBoundaries/ErrorBoundaryDemo';
import ReturnsDemo from './modules/Returns/ReturnsDemo';
import PortalDemo from './modules/Portal/ModalDemo';
import PortalDemo2 from './modules/Portal/ModalDemo2';
import StateNullDemo from './modules/SetStateNull/StateNullDemo';
import ReactFiberDemo from './modules/ReactFiber/ReactFiberDemo';
import ReactFiberDemo2 from './modules/ReactFiber/ReactFiberDemo2';

ReactDOM.render((
    <HashRouter history={hashHistory} >
        <div>
            <Route exact path="/" component={App} />
            <Route path="/errorBoundary" component={ErrorBoundary} />
            <Route path="/returnsDemo" component={ReturnsDemo} />
            <Route path="/portalDemo" component={PortalDemo} />
            <Route path="/portalDemo2" component={PortalDemo2} />
            <Route path="/stateNullDemo" component={StateNullDemo} />
            <Route path="/reactFiberDemo" component={ReactFiberDemo} />
            <Route path="/reactFiberDemo2" component={ReactFiberDemo2} />
        </div>
    </HashRouter>
), document.getElementById('app'));