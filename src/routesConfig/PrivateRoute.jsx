import { useDispatch, useSelector } from "react-redux";
import { selectIsLogged } from "../redux/selectors.js";
import {
  changeLogInModal,
  changeModalOpen,
} from "../redux/modals/modalsSlice.js";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogInModal(true));
  };

  const isLogedIn = useSelector(selectIsLogged);
  if (isLogedIn) {
    return children;
  } else {
    return openModal();
  }
};

export default PrivateRoute;
