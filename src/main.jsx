import { hydrateRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";

hydrateRoot(document.getElementById("app"), <App />);