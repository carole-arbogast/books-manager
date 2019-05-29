import React, { Component } from "react";
import SearchField from "react-search-field";
import axios from "axios";

export class SearchBox extends Component {
	searchBooks = input => {
		const { handleSearchResults } = this.props;
		const search = input.replace(/\s+/g, "+").toLowerCase();
		axios
			.get(`http://openlibrary.org/search.json?title=${search}`)
			.then(res => handleSearchResults(res))
			.catch(err => console.log(err));
	};
	render() {
		return (
			<div>
				<SearchField onEnter={this.searchBooks} />
			</div>
		);
	}
}

export default SearchBox;
