import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
// components
import Snackbar from 'components/common/Snackbar'
// lib
import zIndex from 'lib/styles/zIndex'
import media from 'lib/styles/media'
// module
import { deleteSnackbar } from 'modules/snackbar'

const SnackbarWrapper = ()=> {
	const dispatch = useDispatch();
	const show = useSelector(state => state.snackbar.show);
	const text = useSelector(state => state.snackbar.text);
	const type = useSelector(state => state.snackbar.type);

	const onClick = () => {
		dispatch(deleteSnackbar());
	}

	return (
		<Container>
			{show && <Snackbar onClick={onClick} text={text} type={type}></Snackbar>}
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	top: 40px;
	right: 30px;
	width: 320px;
	height: auto;
	z-index: ${zIndex.snackbar};

	${media.small} {
		width: 100%;
		top: initial;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

export default SnackbarWrapper