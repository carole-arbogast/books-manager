import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Navbar({ logOut, isLoggedIn, handleSearchResults }) {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{isLoggedIn && (
					<li>
						<Link to="/books">My Books</Link>
					</li>
				)}
				<li>
					<SearchBox handleSearchResults={handleSearchResults} />
				</li>

				<li>
					<Link to="/about">About</Link>
				</li>
				{!isLoggedIn && (
					<li>
						<a href="http://localhost:8080/auth/google">Sign In </a>
					</li>
				)}

				{isLoggedIn && (
					<li>
						<button onClick={logOut}>Log Out </button>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
