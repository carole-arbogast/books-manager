import React from "react";

function Shelves(props) {
	const filters = ["All", ...props.shelves];
	return (
		<div>
			{filters.map(filter => (
				<button onClick={e => props.onChangeShelf(e)} key={filter}>
					{filter}
				</button>
			))}
		</div>
	);
}

export default Shelves;
