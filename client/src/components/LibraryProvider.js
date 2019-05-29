import React, { Component } from "react";
import library from "../data";

class LibraryProvider extends Component {
	state = {
		books: [],
		shelves: ["Reading", "To Read", "Read", "Abandoned"]
	};

	generateBookList = () => {
		const { currentShelf } = this.props;
		const books =
			currentShelf === "All"
				? library.books
				: library.books.filter(book => book.shelf === currentShelf);
		this.setState({
			books
		});
	};

	componentDidMount() {
		this.generateBookList();
	}

	componentDidUpdate(prev) {
		const { currentShelf } = this.props;
		if (prev.currentShelf !== currentShelf) {
			this.generateBookList();
		}
	}

	render() {
		return <div>{this.props.render(this.state)}</div>;
	}
}

export default LibraryProvider;
