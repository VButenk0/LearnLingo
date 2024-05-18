import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Global from "./css/common.js";
import "./index.css";
import "./firebase.config";
import { store } from "./redux/store.js";
import Toast from "./components/Toast/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Global />
      <Toast />
    </Provider>
  </BrowserRouter>
);
