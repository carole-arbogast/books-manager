import React from "react";

function Featured(props) {
	const reading = props.books
		.filter(book => book.shelf === "Reading")
		.map(book => book.title)
		.join(", ");

	return (
		<div>
			<h1>Home</h1>
			<h4>Simplified Goodreads, with 10 star ratings</h4>
			<p>Currently reading: {reading}</p>
		</div>
	);
}
export default Featured;
