import styled from "styled-components";

export const Text = styled.p`
	margin: 0.5rem 0 0.5rem 0;
`;

export const Subtitle = styled.h1`
	margin: 0;
	font-size: 1rem;
	font-weight: 400;
	font-style: italic;
`;

export const Title = styled.h1`
	font-size: ${props => props.theme.titleSize[props.size]};
	margin: ${props => props.theme.titleMargin[props.size]};
	color: black;
	text-decoration: none;
`;
