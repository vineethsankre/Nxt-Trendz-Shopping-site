import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App