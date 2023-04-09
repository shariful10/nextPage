import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import ErrorPage from "./components/ErrorPage";
import BookDetails from "./components/BookDetails";
import LoadingSpinner from "./components/LoadingSpinner";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "books",
				element: <Books />,
				loader: () => fetch("https://api.itbook.store/1.0/new"),
			},
			{
				path: "book/:id",
				element: <BookDetails />,
				loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
			},
			{
				path: 'loader',
				element: <LoadingSpinner />
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
