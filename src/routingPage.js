import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import OtherPage from "./otherPage";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer"

const store = createStore(reducer);

class RoutingPage extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <Route exact path="/" component={App} />
            <Route path="/otherpage" component={OtherPage} />
          </Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RoutingPage;
