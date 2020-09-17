import React from 'react';
import styled from 'styled-components'
// lib
import { transition, noselect } from '../lib/styles/styles'

/*
	:::: Styles ::::
*/
const Container = styled.div`
	position: relative;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #f7f6f3;
	overflow: hidden;
`;

const Title = styled.div`
	position: relative;
	width: 100%;
	padding-top: 35vh;
	font-size: 3rem;
	color: #444;
	font-weight: 600;
	text-align: center;
	word-break: keep-all;
`;

const Info = styled.div`
	position: relative;
	width: 100%;
	margin-top: 40px;
	font-size: 1rem;
	color: #444;
	font-weight: 400;
	text-align: center;
`;

const BtnWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 30px;
	margin-top: 40px;
	text-align: center;

	& > a {
		margin-left: 60px;
	}
	& > a:first-child {
		margin-left: 0;
	}
`;

const Btn = styled.img`
	position: relative;
	display: inline-block;
	top: 0px;
	width: 60px;
	height: auto;
	cursor: pointer;
	transition: .3s ${transition};
	${noselect}

	&:hover,
	&:active {
		top: -10px;
	}
`;

const RedirectPage = ()=> {
	return (
	  <Container>
	  	<Title>This browser is not supported.</Title>
	  	<Info>Try using the browser below!</Info>
	  	<BtnWrapper>
	  	  <a href="https://www.google.com/chrome">
	  	  	<Btn src="/icons/browsers/chrome.png" alt="Chrome" />
	  	  </a>
	  	  <a href="https://www.microsoft.com/ko-kr/edge">
	  	    <Btn src="/icons/browsers/edge.png" alt="Edge" />
	  	  </a>
	  	  <a href="https://whale.naver.com/ko/download">
	  	    <Btn src="/icons/browsers/whale.png" alt="Whale" />
	  	  </a>
	  	</BtnWrapper>
	  </Container>
	);
}

export default RedirectPage
