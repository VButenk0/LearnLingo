import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";
import PublicRoute from "./routesConfig/PublicRoute";
import { refreshThunk } from "./redux/auth/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectIsRefresh } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  {
    /* Замінити пізніше <p>Loading</p> на <Loader/> */
  }
  return isRefresh ? (
    <p>Loading...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              <PublicRoute>
                <Teachers />
              </PublicRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PublicRoute>
                <Favorites />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      {isLoading && <p>Loading...</p>}
      {/* Замінити пізніше на Loader */}
    </>
  );
}

export default App;
