import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import React from "react"

import GuestView from './components/GuestView/GuestView'
import ParentView from './components/ParentView/ParentView'

import store from "./store"

export default (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={ParentView} />
    </Switch>
  </Provider>
)