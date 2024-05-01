import { LogOutModalWrpr, LogoutButtonsWrpr } from "./AuthModals.styled";

const LogoutModal = () => {
  return (
    <LogOutModalWrpr>
      <h2>Log out</h2>
      <p>Do you really want to leave?</p>
      <LogoutButtonsWrpr>
        <button>Cancel</button>
        <button className="redBtn">Log out</button>
      </LogoutButtonsWrpr>
    </LogOutModalWrpr>
  );
};

export default LogoutModal;
