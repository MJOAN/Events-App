import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingComponent from "../../app/layouts/LoadingComponent";
import { UserIsAuthenticated } from "../../features/auth/authWrapper";

const AsyncHomePage = Loadable({
  loader: () => import("../../features/home/HomePage"),
  loading: LoadingComponent
});
const AsyncNavBar = Loadable({
  loader: () => import("../../features/nav/NavBar/NavBar"),
  loading: LoadingComponent
});
const AsyncEventDashboard = Loadable({
  loader: () => import("../../features/events/EventDashboard/EventDashboard"),
  loading: LoadingComponent
});
const AsyncModalManager = Loadable({
  loader: () => import("../../features/modals/ModalManager"),
  loading: LoadingComponent
});
const AsyncEventDetailedPage = Loadable({
  loader: () => import("../../features/events/EventDetailed/EventDetailedPage"),
  loading: LoadingComponent
});
const AsyncUserDetailedPage = Loadable({
  loader: () => import("../../features/user/UserDetailed/UserDetailedPage"),
  loading: LoadingComponent
});
const AsyncSettingsDashboard = Loadable({
  loader: () => import("../../features/user/Settings/SettingsDashboard"),
  loading: LoadingComponent
});
const AsyncEventForm = Loadable({
  loader: () => import("../../features/events/EventForm/EventForm"),
  loading: LoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import("../../app/layouts/NotFound"),
  loading: LoadingComponent
});

class App extends Component {
  render() {
    return (
      <div>
        <AsyncModalManager />
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <AsyncNavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={AsyncEventDashboard} />
                  <Route path="/event/:id" component={AsyncEventDetailedPage} />
                  <Route
                    path="/manage/:id"
                    component={UserIsAuthenticated(AsyncEventForm)}
                  />
                  <Route
                    path="/profile/:id"
                    component={UserIsAuthenticated(AsyncUserDetailedPage)}
                  />
                  <Route
                    path="/settings"
                    component={UserIsAuthenticated(AsyncSettingsDashboard)}
                  />
                  <Route
                    path="/createEvent"
                    component={UserIsAuthenticated(AsyncEventForm)}
                  />
                  <Route path="/error" component={AsyncNotFound} />
                  <Route component={AsyncNotFound} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
