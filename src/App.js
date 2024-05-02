import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
