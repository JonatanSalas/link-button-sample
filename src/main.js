import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { Router, Route, browserHistory } from 'react-router';
import LinkButtonContainer from './LinkButtonContainer.js';
import RaisedLinkButtonContainer from './RaisedLinkButtonContainer.js';

injectTapEventPlugin();

const HelloProperties = () => (<div>Hello Properties!</div>);

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router history={browserHistory}>
            <Route path='/' component={LinkButtonContainer}/>
            <Route path='/raised' component={RaisedLinkButtonContainer}/>
            <Route path='/properties' component={HelloProperties}/>
        </Router>
    </MuiThemeProvider>
)

render(<App/>, document.querySelector('#app'));