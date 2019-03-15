import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Cookies from 'js-cookie';
import history from '../../services/browserHistory';
import Header from '../Header';
import Browse from '../Browse';
import Dashboard from '../Dashboard';
import { OAUTH_TOKEN } from '../../constants/authentication';
import { DEFAULT_GENRE } from '../../constants/genre';
import { browse, dashboard } from '../../constants/pathnames';

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
                    <Redirect to={`${browse}/${DEFAULT_GENRE}`} />
                </Switch>
            </div>
        </ConnectedRouter>
    );
  }
}
