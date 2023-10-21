import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux/store";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain= {process.env.REACT_APP_DOMAIN}
  clientId={process.env.REACT_APP_CLIENT_ID}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
  </Auth0Provider>
);
