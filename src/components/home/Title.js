import React from 'react'
import styled from 'styled-components'
// lib'
import media from 'lib/styles/media'

const Title = ({ children }) => {
	return <Content>{children}</Content>;
}

const Content = styled.div`
	position: relative;
	width: 80vw;
	font-size: 3rem;
	font-weight: bold;
	padding: 30vh 0 .5rem 0;
	margin: 0 0 1rem 5vw;
	color: white;
	border-bottom: .5px solid white;

	${media.small} {
		padding: 15vh 0 .5rem 0;
	}
`;

export default Title