import React, { Component } from "react";
import library from "../data";
import find from "lodash/find";

export class BookInfo extends Component {
	state = {
		book: {}
	};

	componentDidMount() {
		const book = find(library.books, book => book.id === this.props.id);
		this.setState({
			book
		});
	}

	render() {
		const { title } = this.state.book;
		return (
			<div>
				<h1>{title}</h1>
			</div>
		);
	}
}

export default BookInfo;
