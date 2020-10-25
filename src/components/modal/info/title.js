import React from 'react'
import styled from 'styled-components'

const Title = ({children}) => {
	return <Content>{children}</Content>
}

const Content = styled.span`
	position: relative;
	font-size: 24px;
	font-weight: 600;
`;

export default Title