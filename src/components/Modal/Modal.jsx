import { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../assets/sprite.svg";
import {
  selectBookingModal,
  selectIsModalOpen,
  selectLogInModal,
  selectLogoutModal,
  selectRegisterModal,
} from "../../redux/selectors";
import LogInModal from "../LogInModal/LogInModal";
import RegistrModal from "../RegistrModal/RegistrModal";
import { closeModals } from "../../redux/modals/modalsSlice";
import {
  BtnClose,
  ModalContainer,
  ModalStyled,
  Overlay,
  SvgBtnClose,
} from "./Modal.styled";

const Modal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const logInModal = useSelector(selectLogInModal);
  const registrModal = useSelector(selectRegisterModal);
  const logoutModal = useSelector(selectLogoutModal);
  const bookingModal = useSelector(selectBookingModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";

    dispatch(closeModals(false));
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onBackdropClick}>
        <ModalContainer>
          <Fade in={modalIsOpen} timeout={1000}>
            <ModalStyled>
              {logInModal && <LogInModal />}
              {registrModal && <RegistrModal />}
              {logoutModal && <></>}
              {bookingModal && <></>}

              <BtnClose type="button" onClick={closeModal}>
                <SvgBtnClose>
                  <use href={`${sprite}#icon-close`} />
                </SvgBtnClose>
              </BtnClose>
            </ModalStyled>
          </Fade>
        </ModalContainer>
      </Overlay>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
