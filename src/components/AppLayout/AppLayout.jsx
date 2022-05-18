import styles from "./AppLayout.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const AppLayout = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		document
			.getElementsByTagName("main")[0]
			.scroll({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return (
		<div className={`${styles.container} min-h-screen w-screen max-w-full`}>
			<header className="h-8">
				<div className="max-width h-full flex items-center">
					<Link
						style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}
						// className="text-white text-2xl font-bold"
						to="/"
					>
						Clima en Santiago
					</Link>
				</div>
			</header>
			<main className="w-full h-full py-8">{children}</main>
		</div>
	);
};

export default AppLayout;
