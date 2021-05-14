import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import CV from "./CV"

function App() {
    return (
      <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cv" component={CV} />
        </Switch>
      </Router>
      </div>
    )
}

export default App