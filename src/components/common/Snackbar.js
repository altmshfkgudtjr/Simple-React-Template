import styled from 'styled-components'
import PropTypes from 'prop-types';
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'
import animations from 'lib/styles/animations'

/*
	onClick: <function> snackbar closing function
	message: <string> snackbar message
	type: <string> snackbar type [info|success|warning|error]
*/
const Snackbar = ({onClick, message, type})=> {
	return (
	  <Container onClick={onClick} type={type}>
	  	<Content>
	  	  <Message>{message}</Message>
	  	</Content>
	  </Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 320px;
	height: auto;
	max-height: 800px;
	background-color: ${ props => {
			if (props.type === 'SUCCESS') {
				return palette.green;
			} else if (props.type === 'WARNING') {
				return palette.red;
			} else if (props.type === 'ERROR') {
				return palette.orange;
			} else if (props.type === 'INFO') {
				return palette.blue4;
			} else {
				return palette.gray7;
			}
		}};
	box-shadow: ${styles.boxShadow.regular};
	border-radius: 4px;
	animation: ${animations.fadeInBottom} .4s cubic-bezier(0.25,0.1,0.25,1),
						 ${animations.fadeOutBottom} .5s cubic-bezier(0.25,0.1,0.25,1) 3.6s;
	cursor: pointer;
	transition: .2s ${styles.transition};
	${styles.noselect};

	&:active {
		transform: scale(.97, .97);
	}

	${media.small} {
		border-radius: 0px;
		width: 100%;
		min-height: 1.8rem;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: auto;
	min-height: 2rem;
	box-sizing: border-box;
	padding: 12px 20px;

	${media.small} {
		min-height: 1.6rem;
		line-height: 1.6rem;
	}
`;

const Message = styled.div`
	position: relative;
	flex-grow: 1;
	color: white;
	font-size: 14px;
	font-weight: 400;
	white-space: pre-wrap;
	word-break: keep-all;
	vertical-align: top;
`;

Snackbar.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string
}

export default Snackbar