import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
// import Home from './pages/home';
import Create from './pages/create';

function App() {
  return (
    <div className="App">
    <Router>
                <Route path='/' exact component={Create} />
                <Route path='/create' exact component={Create} />
                {/* <Route path='/dashboard'  component={Dashboard} />
                <Route path='/signup'  component={Signup}  /> */}
    </Router>
    </div>
  );
}

export default App;
