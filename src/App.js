import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <Router>
                <Route path='/' exact component={Home} />
                {/* <Route path='/dashboard'  component={Dashboard} />
                <Route path='/signup'  component={Signup}  /> */}
    </Router>
    </div>
  );
}

export default App;
