import { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1;}
`;
const fadeOut = keyframes`
	0% { opacity: 1; }
	100% { opacity: 0; }
`;
const fadeInTop = keyframes`
	0% { opacity: 0; transform: translateY(-40px); }
	100% { opacity: 1; transform: translateY(0); }
`;
const fadeOutTop = keyframes`
	0% { opacity: 1; transform: translateY(0); }
	100% { opacity: 0; transform: translateY(-40px); }
`;
const fadeInBottom = keyframes`
	0% { opacity: 0; transform: translateY(40px); }
	100% { opacity: 1; transform: translateY(0); }
`;
const fadeOutBottom = keyframes`
	0% { opacity: 1; transform: translateY(0); }
	100% { opacity: 0; transform: translateY(40px); }
`;
const fadeInLeft = keyframes`
	0% { opacity: 0; transform: translateX(-40px); }
	100% { opacity: 1; transform: translateX(0); }
`;
const fadeOutLeft = keyframes`
	0% { opacity: 1; transform: translateX(0); }
	100% { opacity: 0; transform: translateX(-40px); }
`;
const fadeInRight = keyframes`
	0% { opacity: 0; transform: translateX(40px); }
	100% { opacity: 1; transform: translateX(0); }
`;
const fadeOutRight = keyframes`
	0% { opacity: 1; transform: translateX(0); }
	100% { opacity: 0; transform: translateX(40px); }
`;
const zoomIn = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(1, 1); }
`;
const zoomOut = keyframes`
	0% { opacity: 1; transform: scale(1, 1); }
	100% { opacity: 0; transform: scale(.5, .5); }
`;
const tooltip = keyframes`
	0% { opacity: 0; }
	40% { opacity: 0; }
	50% { opacity: 1; } 
	100% { opacity: 1; }
`;
const pulse = keyframes`
	0% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
	70% { box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
	100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
`;
const animations = {
	fadeIn,
	fadeOut,
	fadeInTop,
	fadeOutTop,
	fadeInBottom,
	fadeOutBottom,
	fadeInLeft,
	fadeOutLeft,
	fadeInRight,
	fadeOutRight,
	zoomIn,
	zoomOut,
	tooltip,
	pulse
};

export default animations