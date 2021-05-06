import styled from 'styled-components'
// lib
import zIndex from 'lib/styles/zIndex'
import animations from 'lib/styles/animations'


const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(249, 249, 249, 0.85);
	z-index: ${zIndex.modal};
	animation: ${animations.fadeIn} .2s;
`;

export default Background