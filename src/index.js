import "./styles/global.scss";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./components/AppRouter/AppRouter";
import { WeatherContextProvider } from "./context/WeatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<WeatherContextProvider>
		<AppRouter />
	</WeatherContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
