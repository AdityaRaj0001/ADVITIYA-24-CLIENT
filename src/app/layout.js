import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "./next-toastify.js";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/redux/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ADVITIYA'24",
	description: "TechFest IIT ROPAR",
	icons: {
		icon: "/icon.png",
		},
};

export default function RootLayout({ children }) {
	return (
		<ReduxProvider>
			<html lang="en">
				<body className={inter.className}>
					{children}
					<ToastContainer />
				</body>
			</html>
		</ReduxProvider>
	);
}
