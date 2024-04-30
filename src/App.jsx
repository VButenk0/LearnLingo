import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";
import PublicRoute from "./routesConfig/PublicRoute";

function App() {
  return (
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
    </>
  );
}

export default App;
