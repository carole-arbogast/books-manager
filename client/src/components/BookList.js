import React from "react";
import Card from "./Card/Card";
import styled from "styled-components";

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

function BookList({ shelves, books }) {
	return (
		<Grid>
			{books.map(book => {
				const {
					id,
					title,
					author,
					blurb,
					thumbnail,
					averageRating
				} = book;
				return (
					<Card
						key={id}
						header={title}
						subtitle={author}
						text={blurb}
						maxLength={200}
						image={thumbnail}
						averageRating={averageRating}
						id={id}
						shelves={shelves}
					/>
				);
			})}
		</Grid>
	);
}
export default BookList;
