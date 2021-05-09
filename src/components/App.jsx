import React from "react"
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import CV from "./CV"

function App() {
    return (
      <div>
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cv" component={CV} />
        </Switch>
      </HashRouter>
      </div>
    )
}

export default App