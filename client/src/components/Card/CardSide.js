import React from "react";
import { Thumbnail } from "../../styles/Image";
import { CardSideWrapper, ExtraInfo } from "./theme";

function CardSide({ image, onChangeStatus }) {
	return (
		<CardSideWrapper>
			<Thumbnail src={image} alt="" />
			<button onClick={onChangeStatus}>Reading</button>
			<ExtraInfo>Rating: 10/10</ExtraInfo>
		</CardSideWrapper>
	);
}

export default CardSide;
