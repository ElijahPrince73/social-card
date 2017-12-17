import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header'
import Cards from './pages/card-list'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path="/" component={Cards} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
