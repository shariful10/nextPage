import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return (
		<div>
			<Header />
			<div className="min-h-[calc(100vh-136px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default App;
