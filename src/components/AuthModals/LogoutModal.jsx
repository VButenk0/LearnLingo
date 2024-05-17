import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logoutThunk } from "../../redux/auth/operations";
import { closeModals } from "../../redux/modals/modalsSlice";
import { LogOutModalWrpr, LogoutButtonsWrpr } from "./AuthModals.styled";

const LogoutModal = () => {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutThunk());
    dispatch(closeModals());
    toast.info("Logout successful!");
  };

  return (
    <LogOutModalWrpr>
      <h2>Log out</h2>
      <p>Do you really want to leave?</p>
      <LogoutButtonsWrpr onClick={onLogoutClick}>Log out</LogoutButtonsWrpr>
    </LogOutModalWrpr>
  );
};

export default LogoutModal;
