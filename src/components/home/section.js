import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'

const Section = ({children}) => {
	return <Container>{children}</Container>
}

const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	min-height: 100vh;
	background-color: #12b886;
	${styles.noselect}
`;

export default Section