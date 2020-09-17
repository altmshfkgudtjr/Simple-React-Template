import React from 'react'
import styled from 'styled-components'

/*
	:::: Styles ::::
*/
const Content = styled.span`
	position: relative;
	font-size: 24px;
	font-weight: 600;
`;

/*
	:::: Store States ::::
	children: <Components> React children components
*/
const Title = ({children}) => {
	return <Content>{children}</Content>
}

export default Title