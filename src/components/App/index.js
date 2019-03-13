import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Cookies from 'js-cookie';
import history from '../../stores/browserHistory';
import Header from '../Header';
import Browse from '../Browse';
import Callback from '../Callback';
import Dashboard from '../Dashboard';
import { OAUTH_TOKEN } from '../../constants/authentication';
import { DEFAULT_GENRE } from '../../constants/genre';
import { browse, dashboard, callback } from '../../constants/pathnames';
// import { bindActionCreators } from 'redux';
/* Switch stops searching for the path once the match is found */
/* Do not pass 'exact' props. It won't match /dashboard/other_url */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAppClose = this.onAppClose.bind(this);
  }

  componentWillMount() {
    window.removeEventListener('beforeunload', this.onAppClose);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onAppClose);
  }


  onAppClose() {
    Cookies.remove(OAUTH_TOKEN);
  }

  render() {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Header />
                <Switch>
                    <Route exact path={`${browse}/:genre`} component={Browse} />
                    <Route exact path={dashboard} component={Dashboard} />
                    <Route exact path={callback} component={Callback} />
                    <Redirect to={`${browse}/${DEFAULT_GENRE}`} />
                </Switch>
            </div>
        </ConnectedRouter>
    );
  }
}
