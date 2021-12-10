import React from "react"
import PropTypes from "prop-types"
import Greeting from "./Greeting"
import { Provider } from "react-redux";
import store from "../redux/configureStore";
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Greeting />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App
