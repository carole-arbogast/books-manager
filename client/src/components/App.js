import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { getUserInfo } from "../api";
import Navbar from "./Navbar";
import Main from "./Main";
import "../App.css";
import styled from "styled-components";

export const Icon = styled.i.attrs({
	className: props => props.className
})``;

class App extends Component {
	state = {
		isLoggedIn: false,
		user: null,
		searchResults: {}
	};

	handleSearchResults = res => {
		const data = res.data.docs.slice(0, 20);
		const result = data.map(book => ({
			cover: `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
			title: book.title,
			author: book.author_name,
			published: book.first_publish_year
		}));
		this.setState({
			searchResults: result
		});
	};
	componentDidMount() {
		getUserInfo().then(userInfo =>
			this.setState({
				isLoggedIn: true,
				user: userInfo
			})
		);
		// updateUserInfo("5c69359bc1c6132c7d663d43", {
		// 	books: [
		// 		{
		// 			reference: "123",
		// 			shelf: "reading"
		// 		}
		// 	]
		// });
	}

	handleLogOut = e => {
		e.preventDefault();
		console.log("logging out");
		axios
			.post("/auth/logout")
			.then(res => {
				res.status === 200
					? this.setState({
							isLoggedIn: false,
							user: null
					  })
					: console.log("Logging out failed");
			})
			.catch(err => console.log(err));
	};
	render() {
		const { isLoggedIn, searchResults } = this.state;
		return (
			<BrowserRouter>
				<Fragment>
					<Navbar
						logOut={this.handleLogOut}
						isLoggedIn={isLoggedIn}
						handleSearchResults={this.handleSearchResults}
					/>
					<Main searchResults={searchResults} />
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
