import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'

const Section = ({ children }) => {
	return <Container>{children}</Container>
}

const Container = styled.div`
	height: 100vh;
	background-color: #12b886;
	${styles.noselect}
`;

export default Section