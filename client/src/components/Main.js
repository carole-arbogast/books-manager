import React from "react";
import Home from "../pages/Home";
import Books from "../pages/Books";
import About from "../pages/About";
import { Switch, Route } from "react-router-dom";

function Main() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/books" component={Books} />
				<Route path="/about" component={About} />
			</Switch>
		</main>
	);
}

export default Main;
