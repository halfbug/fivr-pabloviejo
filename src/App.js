import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
// import Home from './pages/home';
import Create from './pages/create';
import Analyse from './pages/analyse';
import Edit from './pages/edit';
import Account from './pages/account';
import Style from './pages/style';

function App() {
  return (
    <div className="App">
    <Router>
                <Route path='/' exact component={Create} />
                <Route path='/create' exact component={Create} />
                <Route path='/analyse' exact component={Analyse} />
                <Route path='/edit' exact component={Edit} />
                <Route path='/account' exact component={Account} />
                <Route path='/style' exact component={Style} />
    </Router>
    </div>
  );
}

export default App;
