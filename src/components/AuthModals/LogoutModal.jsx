import { useDispatch } from "react-redux";
import { LogOutModalWrpr, LogoutButtonsWrpr } from "./AuthModals.styled";
import { logoutThunk } from "../../redux/auth/operations";
import { closeModals } from "../../redux/modals/modalsSlice";

const LogoutModal = () => {
  const dispatch = useDispatch();

  const onCancelClick = () => {
    dispatch(closeModals());
  };

  const onLogoutClick = () => {
    dispatch(logoutThunk());
    dispatch(closeModals());
  };

  return (
    <LogOutModalWrpr>
      <h2>Log out</h2>
      <p>Do you really want to leave?</p>
      <LogoutButtonsWrpr>
        <button onClick={onCancelClick}>Cancel</button>
        <button className="redBtn" onClick={onLogoutClick}>
          Log out
        </button>
      </LogoutButtonsWrpr>
    </LogOutModalWrpr>
  );
};

export default LogoutModal;
