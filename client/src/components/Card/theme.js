import styled from "styled-components";

export const CardWrapper = styled.div`
	border: 1px black solid;
	margin: 2rem;
	padding: 1rem;
	display: flex;
`;

export const CardSideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 0.5rem;
`;

export const CardBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 15em;
	margin-left: 0.5rem;
`;

export const Content = styled.div`
	height: 9em;
`;

export const Modal = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ExtraInfo = styled.p`
	margin: 0;
	font-size: 0.85rem;
`;
