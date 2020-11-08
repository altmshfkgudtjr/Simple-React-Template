import React from 'react';
import { Helmet } from "react-helmet-async"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// lib
import { transition, noselect } from 'lib/styles/styles'
import palette from 'lib/styles/palette'

function NoPage() {
	return (<>
		<Helmet>
			<title>APP-NAME - 404</title>
		</Helmet>

		<Title>404 Not Found.</Title>
		<Link to="/">
			<Btn>Back</Btn>
		</Link>
	</>);
}

const Title = styled.div`
	position: relative;
	width: 100%;
	margin-top: 40vh;
	font-size: 3rem;
	color: #444;
	font-weight: 600;
	text-align: center;
`;

const Btn = styled.button`
	position: relative;
	display: block;
	width: 100px;
	height: 30px;
	font-size: 0.8rem;
	line-height: 26px;
	margin: 15px auto;
	border-radius: 4px;
	border: 1px solid ${palette.gray4};
	text-align: center;
	cursor: pointer;
	transition: .2s ${transition};
	${noselect}

	&:hover,
	&:active {
		background-color: ${palette.gray7};
		color: white;
	}
`;

export default NoPage