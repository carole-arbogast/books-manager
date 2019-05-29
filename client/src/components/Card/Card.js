import React, { Component } from "react";
import CardSide from "./CardSide";
import CardBody from "./CardBody";
import { CardWrapper } from "./theme";

export class Card extends Component {
	state = {
		modal: false
	};

	handleOnChangeStatus = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	render() {
		const { header, subtitle, text, image } = this.props;
		const { maxLength, id, shelves } = this.props;
		const { modal } = this.state;
		return (
			<CardWrapper>
				<CardSide
					image={image}
					onChangeStatus={this.handleOnChangeStatus}
				/>
				<CardBody
					header={header}
					subtitle={subtitle}
					text={text}
					maxLength={maxLength}
					modal={modal}
					shelves={shelves}
					id={id}
				/>
			</CardWrapper>
		);
	}
}

export default Card;
