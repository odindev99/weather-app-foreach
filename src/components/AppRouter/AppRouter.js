import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../../pages/Details";
import AppLayout from "../AppLayout/AppLayout";
import Home from "../../pages/Home/Home";

function AppRouter() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path=":day" element={<Details />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default AppRouter;
