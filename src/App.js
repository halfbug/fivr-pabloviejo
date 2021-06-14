import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
// import Home from './pages/home';
import Create from './pages/create';
import Analyse from './pages/analyse';
import Edit from './pages/edit';

function App() {
  return (
    <div className="App">
    <Router>
                <Route path='/' exact component={Create} />
                <Route path='/create' exact component={Create} />
                <Route path='/analyse' exact component={Analyse} />
                <Route path='/edit' exact component={Edit} />
    </Router>
    </div>
  );
}

export default App;
