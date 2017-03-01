import {render} from 'inferno';
import {Routes} from './route/Route';
import {Router} from 'inferno-router';

const container = document.getElementById('app');
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();
render(
  <Router history={browserHistory}>
    {Routes}
  </Router>,
  container);
