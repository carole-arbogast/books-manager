import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Shelves from "../components/Shelves";
import BookList from "../components/BookList";
import BookInfo from "../components/BookInfo";
import LibraryProvider from "../components/LibraryProvider";

class Books extends Component {
	state = {
		currentShelf: "All"
	};

	handleChangeShelf = e => {
		this.setState({
			currentShelf: e.target.innerHTML
		});
	};

	render() {
		const { currentShelf } = this.state;
		return (
			<Switch>
				<Route
					path="/books/:id"
					render={props => <BookInfo id={props.match.params.id} />}
				/>
				<Route>
					<LibraryProvider
						currentShelf={currentShelf}
						render={library => (
							<Fragment>
								<Shelves
									shelves={library.shelves}
									onChangeShelf={this.handleChangeShelf}
								/>
								<BookList
									books={library.books}
									shelves={library.shelves}
								/>
							</Fragment>
						)}
					/>
				</Route>
			</Switch>
		);
	}
}

export default Books;
