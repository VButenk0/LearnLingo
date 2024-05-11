import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Toast = () => {
  const customToastContent = () => {
    <div style={{ color: "var(--accent-color)" }} />;
  };
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
      toastClassName="purple-toast"
      toastContent={customToastContent}
      toastStyle={{
        background: "var(--bcgclr)",
        color: "var(--primary-text)",
        width: "300px",
        fontSize: "18px",
        borderRadius: "12px",
      }}
      progressStyle={{ background: "var(--accent-color)" }}
      icon={false}
      showOnlyTheLastOne={true}
    />
  );
};

export default Toast;
