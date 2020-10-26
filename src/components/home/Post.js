import React from 'react'
import styled from 'styled-components'
// lib
import { transition } from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const Post = ({children}) => {
	return <Content>{children}</Content>;
}

const Content = styled.div`
	position: relative;
	width: 90%;
	font-size: 1.2rem;
	font-weight: 200;
	margin-left: 5vw;
	color: #EEE;
	word-break: keep-all;
	transition: .4s ${transition}; 

	& > a { 
		color: ${palette.teal7};
		font-weight: 600;
	}
	& > a:hover { color: ${palette.teal1}; }
`;

export default Post