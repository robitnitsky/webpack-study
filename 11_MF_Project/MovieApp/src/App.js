import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
// import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
// import Homepage from "./components/Homepage/Homepage.jsx";
// import BookPage from "./components/BookPage/BookPage.jsx";

const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatselectionPage = React.lazy(() => import("seatselection/SeatSelection"));

const App = () => {
  return (
    <Switch>
      <Route path="/details">
          <Suspense fallback={null}>
            <DetailsPage></DetailsPage>
          </Suspense>
      </Route>
      <Route path="/book">
          <Suspense fallback={null}>
              <SeatselectionPage></SeatselectionPage>
          </Suspense>
      </Route>
      <Route path="/">
          <Suspense fallback={null}>
              <HomePage></HomePage>
          </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
