import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LibraryProvider from "../components/LibraryProvider";
import Featured from "../components/Featured";

function Home() {
	return (
		<Fragment>
			<LibraryProvider
				currentShelf={"Reading"}
				render={library => <Featured books={library.books} />}
			/>
			<Link to="/books">
				<button>My Books</button>
			</Link>
		</Fragment>
	);
}

export default Home;
