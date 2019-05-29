import React from "react";
import ModalContent from "./ModalContent";
import { Text, Title, Subtitle } from "../../styles/Text";
import { CardBodyWrapper, Modal, Content } from "./theme";

function CardBody({ header, subtitle, modal, maxLength, text, shelves, id }) {
	return (
		<CardBodyWrapper>
			<Title size="medium" as="a" href={`/books/${id}`}>
				{header}
			</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Content>
				{modal ? (
					<Modal>
						<ModalContent shelves={shelves} />
					</Modal>
				) : (
					<Text>{`${text.slice(0, maxLength)}...`}</Text>
				)}
			</Content>
		</CardBodyWrapper>
	);
}

export default CardBody;
