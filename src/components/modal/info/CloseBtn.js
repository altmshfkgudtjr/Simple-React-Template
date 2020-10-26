import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'

/*
	ModalOff: <function> Default function, Don't remove.
*/
const CloseBtn = ({ ModalOff }) => {
	return <Content onClick={ModalOff}>Close Modal</Content>
}

const Content = styled.div`
	position: relative;
	width: 160px;
	margin: 5rem auto 0 auto;
	text-align: center;
	font-size: 14px;
	line-height: 32px;
	background-color: ${palette.teal4};
	border: 1.8px solid ${palette.teal4};
	border-radius: 2rem;
	font-weight: 600;
	text-align: center;
	color: #fefefe;
	cursor: pointer;
	${styles.noselect}

	&:hover {
		background-color: ${palette.teal3};
		border: 1.8px solid ${palette.teal3};
	}
`;

export default CloseBtn