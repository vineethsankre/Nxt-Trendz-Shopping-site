import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
