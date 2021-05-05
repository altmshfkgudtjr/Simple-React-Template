import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
// components
import Snackbar from 'components/common/Snackbar'
// lib
import zIndex from 'lib/styles/zIndex'
import media from 'lib/styles/media'
// module
import { deleteSnackbar } from 'slices/snackbar'


const SnackbarWrapper = ()=> {
	const dispatch = useDispatch();
	const type = useSelector(state => state.snackbar.type);
	const message = useSelector(state => state.snackbar.message);

	
	const onClick = () => dispatch(deleteSnackbar());


	return (
		<Container>
			{message && <Snackbar 
				onClick={onClick} 
				type={type} 
				message={message} 
			/>}
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