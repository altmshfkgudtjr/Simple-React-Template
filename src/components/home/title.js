import React from 'react'
import styled from 'styled-components'
// lib
import { transition } from '../../lib/styles/styles'
import media from '../../lib/styles/media'

/*
	:::: Styles ::::
*/
const Content = styled.div`
	position: relative;
	width: 60vw;
	font-size: 3rem;
	font-weight: bold;
	padding: 30vh 0 .5rem 0;
	margin: 0 0 1rem 5vw;
	color: white;
	border-bottom: .5px solid white;
	transition: .6s ${transition};

	${media.small} {
		padding: 15vh 0 .5rem 0;
	}
`;

/*
	:::: Store States ::::
	children: <Components> React children components
*/
const Title = ({children}) => {
	return <Content>{children}</Content>;
}

export default Title