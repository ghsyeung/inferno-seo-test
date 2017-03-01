import {Route, Link} from 'inferno-router';
import {MyComponent} from '../containers/MyComponent';

function NavMenu() {
  return <div className="nav-menu">
    <ul>
      <li className="to-my-component">
        <Link to="/comp">My Component</Link>
      </li>
      <li className="to-user">
        <Link to="/users/user/Frank">Frank</Link>
      </li>
    </ul>
  </div>
}

function App({children}) {
  return (<div>
    <NavMenu />
    {children}
  </div>)
}

function NoMatch({children}) {
  return <div>No Match</div>
}

// `children` in this case will be the `User` component
function Users({children, params}) {
  return <div>{ children }</div>
}

function User({params}) {
  return <div>{ JSON.stringify(params) }</div>
}

export const Routes = (
  <Route component={ App }>
    <Route path="/comp" component={ MyComponent }/>
    <Route path="/users" component={ Users }>
      <Route path="/user/:username" component={ User }/>
    </Route>
    <Route path="*" component={ NoMatch }/>
  </Route>
);


