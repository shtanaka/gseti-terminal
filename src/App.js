import "./App.css";

import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import store from "store"
import routes from "routes"

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route path={route.path} key={`route-${route.path}`}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Router>
      </ReduxProvider>
    </div>
  );
}

export default App;
