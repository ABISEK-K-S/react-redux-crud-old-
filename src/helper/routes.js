import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import BodyContainer from "./../container/bodyContainer";

function RouteComponent() {
  return (
    <Switch>
      <Route exact path="/" component={BodyContainer} />
    </Switch>
  );
}

export default withRouter(RouteComponent);
