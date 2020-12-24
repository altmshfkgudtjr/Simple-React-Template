import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// components
import Title from 'components/modal/info/Title'
import Badge from 'components/modal/info/Badge'
import CloseBtn from 'components/modal/info/CloseBtn'
// lib
import media from 'lib/styles/media'
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'
// modules
import { newSnackbar } from 'modules/snackbar'

/*
	PreventModalOff: <function> Default function, Don't remove.
	ModalOff: <function> Default function, Don't remove.
	args: <Dictionary> Arguments
*/
const InfoModal = ({ PreventModalOff, ModalOff, args }) => {
	const dispatch = useDispatch();
	const onClickBadge = () => dispatch(newSnackbar('Simple is best.'));

	return (
	  <Container onMouseDown={PreventModalOff}>
	  	<TitleWrapper>
	  		<Title>
	  			<Badge onClick={onClickBadge} title={args['title']} /> means
	  		</Title>
	  		<h1>Development</h1>
	  		<Title>should be simple.</Title>
	  	</TitleWrapper>
	  	<CloseBtn ModalOff={ModalOff} />
	  </Container>
	);
}

const Container = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 100%;
	max-width: 600px;
	height: 100%;
	max-height: 400px;
	background-color: white;
	border-radius: 4px;
	box-shadow: ${styles.boxShadow.regular};
	animation: ${animations.fadeInBottom} .6s;

	${media.small} {
		max-height: 100%;
	}
`;

const TitleWrapper = styled.div`
	position: relative;
	width: auto;
	margin: auto;
	margin-top: 2rem;
	text-align: center;
	${styles.noselect}

	& > h1 {
		font-size: 48px;
		font-weight: 600;
		margin-top: .5rem;
		margin-bottom: 1rem;
		animation: ${animations.zoomIn} 1s cubic-bezier(.4,0,.5,1.2);
	}

	${media.small} {
		margin-top: 4rem;
	}
`;

export default InfoModal