import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  createFirestoreInstance,
  getFirestore,
} from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from "react-redux-firebase";
import firebase, { fbConfig } from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),//apply to the action parameters
    reduxFirestore(firebase, fbConfig)
  )
);
//the thunk can be used to delay the dispatch of an action or to dispatch only if a certain condition is met
//the inner function received the store method dispatch and getstate



const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //needed if using firestore
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth); //useSelector is react-redux hook, similar to mapStateToProps
  //console.log(auth)
  if (!isLoaded(auth)) return <div>loading ...</div>;
  return children;
} //to prevent a glitch when you reflect the page. It allows the page waitting for firebase to figure out if user is logged in and then render the stuff to the DOM.

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
