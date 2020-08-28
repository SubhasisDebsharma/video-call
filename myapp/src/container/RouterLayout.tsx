import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
const Auth = lazy(() => import('./Auth'));
const Home = lazy(() => import('./Home'));

export default function RouterLayout() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="auth" component={Auth}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Suspense>
  );
}
