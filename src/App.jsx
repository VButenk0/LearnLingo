import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";
import PublicRoute from "./routesConfig/PublicRoute";
import PrivateRoute from "./routesConfig/PrivateRoute";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsLoadingData } from "./redux/selectors";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingData);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
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
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
