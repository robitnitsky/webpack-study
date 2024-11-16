import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
// import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
// import Homepage from "./components/Homepage/Homepage.jsx";
// import BookPage from "./components/BookPage/BookPage.jsx";

const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatselectionPage = React.lazy(() => import("seatselection/SeatSelection"));

const App = () => {
    const history = useHistory();
    const location = useLocation();

    const movieClicked = (movie) => {
        history.push(`details/${movie.id}`);
    }

  return (
    <Switch>
      <Route path="/details/:id">
          <Suspense fallback={null}>
            <DetailsPage routing={{history, location}} />
          </Suspense>
      </Route>
      <Route path="/book">
          <Suspense fallback={null}>
              <SeatselectionPage></SeatselectionPage>
          </Suspense>
      </Route>
      <Route path="/">
          <Suspense fallback={null}>
              <HomePage
                  movieClicked={movieClicked}
                  routing={{history, location}}
              />
          </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
