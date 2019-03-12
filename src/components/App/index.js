import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import history from '../../stores/browserHistory';
export default class App extends React.Component {
    render(){
        return (<ConnectedRouter history={history}>
            {/* Switch stops searching for the path once the match is found */}
            <Switch>
                <Route exact path="/" component={()=>{<h1>Hello</h1>}} />
                {/* Do not pass 'exact' props. It won't match /dashboard/other_url */}
                <Route path="/dashboard" component={()=>{<h1>Hello</h1>}} />
            </Switch>
        </ConnectedRouter>);
    }
}