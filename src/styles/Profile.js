import styled from 'styled-components';
import {CsBold, CsButton} from './common';

export const CsProfileHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-top: 30px;
`;

export const CsProfileColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	#bio {
		align-self: flex-start;
		margin-left: 20px;
	}
`;
export const CsProfileAvatar = styled.img`
	margin-left: 50px;
	height: 160px;
	width: 160px;
	border-radius: 50%;
	margin-right: 150px;
`;

export const CsProfileUsername = styled.h3`
	font-size: 28px;
	font-weight: 400;
`;
export const CsProfileRow = styled.div`
	margin-bottom: 20px;
	font-size: 16px;
	display: flex;
	align-items: baseline;
`;
export const CsProfileButton = styled(CsButton).attrs({as: 'button'})`
	width: 150px;
	margin-left: 10px;

	background-color: ${({isFollowing, theme}) => (isFollowing ? 'darkGrey' : theme.buttonBlue)};
`;
export const CsIconButton = styled.button`
	cursor: pointer;
	width: 100px;
	margin-top: 22px;
	text-align: center;
	padding: 8px 0px;
	border: none;
	font-weight: 500;
	margin-left: 10px;
	color: ${({color}) => color && color};
	background-color: ${({bgColor, theme}) => (bgColor ? bgColor : theme.buttonBlue)};
`;
export const CsProfileList = styled.ul`
	display: flex;
`;
export const CsProfileItem = styled.li`
	margin-right: 20px;
	margin-top: 10px;
`;
export const CsProfileValue = styled(CsBold)`
	font-size: 18px;
	padding-left: 10px;
`;
export const CsProfileName = styled(CsBold)`
	font-size: 20;
`;
export const CsProfileGrid = styled.div`
	display: grid;
	grid-auto-rows: 290px;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	margin-top: 50px;
`;
export const CsProfilePhoto = styled.div`
	background-image: url(${({url}) => url});
	background-size: cover;
	position: relative;
`;
export const CsProfileIcons = styled.div`
	cursor: pointer;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	opacity: 0;
	&:hover {
		opacity: 1;
	}
`;
export const CsProfileIcon = styled.span`
	font-size: 18px;
	display: flex;
	align-items: center;
	margin: 0px 5px;
	svg {
		font-size: 14px;
		margin-right: 5px;
	}
`;
