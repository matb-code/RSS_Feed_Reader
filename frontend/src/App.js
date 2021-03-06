import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserContextProvider from'./Context/UserContext';
import FeedContextProvider from './Context/FeedContext';
import PrivateRoute from './components/PrivateRoute';
import SendEmail from './components/SendEmail';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
      <UserContextProvider>
       <FeedContextProvider>
      <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/home' component={Home} />
            <Route path='/register' component={SignUp} />
            <Route path='/send_email' component={SendEmail} />
            <Route path='/confirm_password' component={ResetPassword} />
      </Switch>
      </FeedContextProvider> 
      </UserContextProvider>
      </div>
    </Router>
    )
}

export default App;
