import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import App from "./app/layouts/App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";
import { loadEvents } from "./features/events/eventActions";

const store = configureStore();
store.dispatch(loadEvents());

const rootElement = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr
            position="bottom-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};

if (module.hot) {
  module.hot.accept("./app/layouts/App", () => {
    setTimeout(render);
  });
}

render();
serviceWorker.unregister();
