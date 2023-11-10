import React from "react";
import ReactDOM from "react-dom/client";
/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

/* const firebaseConfig = {
  apiKey: "AIzaSyAo2g22KLNgJZ1P6Pia9h46HSUQjk6fKMA",
  authDomain: "e-commerse-react-a8cb8.firebaseapp.com",
  projectId: "e-commerse-react-a8cb8",
  storageBucket: "e-commerse-react-a8cb8.appspot.com",
  messagingSenderId: "737301912751",
  appId: "1:737301912751:web:40fb8bf8c2c42add31485a",
  measurementId: "G-X0JCPXBTKD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-o8drdnbamqi3w0ho.us.auth0.com"
    clientId="zhH72RkoOZsnqY7901e6ssdXMGdaIBGT"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
);
