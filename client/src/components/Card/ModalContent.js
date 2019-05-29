import React, { Fragment } from "react";

function ModalContent({ shelves }) {
	return (
		<Fragment>
			{shelves.map(shelf => (
				<button key={shelf}>{shelf}</button>
			))}
		</Fragment>
	);
}

export default ModalContent;
