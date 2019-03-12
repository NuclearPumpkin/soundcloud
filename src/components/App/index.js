import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import history from '../../stores/browserHistory';
import { bindActionCreators } from 'redux';
/* Switch stops searching for the path once the match is found */
/* Do not pass 'exact' props. It won't match /dashboard/other_url */

import * as actions from '../../actions/';
import { connect } from 'react-redux';

class App extends React.Component {
    render(){
        /* return (<ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component="<h1>Hello</h1>" />
                <Route path="/dashboard" component="<h1>Hello</h1>" />
            </Switch>
        </ConnectedRouter>); */

        return(<div>
            {this.props.data}
            <button onClick={this.props.fetchData}>Click me</button>
        </div>)
    }
}




export default  connect(null, null)(App);