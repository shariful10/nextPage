import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
	return (
		<Link to={`../book/${book.isbn13}`}>
			<div
				key={book.isbn13}
				className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-lg shadow-lg hover:shadow-2xl">
				<img
					src={book.image}
					alt="Book Cover"
					className="object-cover w-full h-56 md:h-64 xl:h-80"
				/>
				<div className="bg-blue-700 px-6 py-6 bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col">
					<p>{book.title}</p>
					<br />
					{book.subtitle ? <p>{book.subtitle.substring(0, 50)}...</p> : ""}
					<br />
					<p className="mt-auto">Price: {book.price}</p>
				</div>
			</div>
		</Link>
	);
};

export default Book;
