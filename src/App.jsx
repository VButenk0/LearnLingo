import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              // <PublicRoute>
              <Home />
              // </PublicRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              // <PublicRoute>
              <Teachers />
              // </PublicRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              // <PrivateRoute>
              <Favorites />
              // </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
