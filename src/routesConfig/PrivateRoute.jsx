import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectIsLogged } from "../redux/selectors.js";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      toast.info("You need to be logged in to access Favorites!");
      navigate("/");
    }
  }, [isLogged, navigate]);

  return isLogged ? children : null;
};

export default PrivateRoute;
