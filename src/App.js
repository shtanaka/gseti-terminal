import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "routes"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path} key={`route-${route.path}`}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
