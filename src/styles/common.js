import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const CsMain = styled.main`
	max-width: 930px;
	width: 100%;
	margin: 0 auto;
	margin-top: 45px;
`;
export const CsContainer = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const CsWrapper = styled.div`
	max-width: 350px;
	width: 100%;
`;
export const CsBox = styled.div`
	background-color: white;
	border: 1px solid ${({theme}) => theme.borderGrey};
	width: 100%;
	padding: 35px 40px 25px 40px;
`;
export const CsButton = styled.input`
	cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
	width: 100%;
	margin-top: 22px;
	background-color: ${({theme}) => theme.buttonBlue};
	color: white;
	text-align: center;
	padding: 8px 0px;
	border: none;
	font-weight: 500;
	opacity: ${({disabled}) => disabled && 0.4};
`;

export const CsSepreator = styled.div`
	margin: 20px 0px 20px 0px;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;

	div {
		width: 100%;
		height: 1px;
		background-color: ${({theme}) => theme.borderGrey};
	}
	span {
		margin: 0px 10px;
		color: #8e8e8e;
		font-weight: 600;
		font-size: 12px;
	}
`;
export const CsTopBox = styled(CsBox)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 10px;
	form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 35px;
		width: 100%;
	}
`;
export const CsInput = styled.input`
	width: 100%;
	border-radius: 3px;
	padding: 10px 7px;
	background-color: #fafafa;
	border: 0.5px solid ${({theme, hasError}) => (hasError ? 'red' : theme.borderGrey)};
	margin-top: 10px;
	box-sizing: border-box;
`;

export const CsButtomBox = styled(CsBox)`
	padding: 15px 0px;
	text-align: center;
	a {
		font-weight: 600;
		color: ${({theme}) => theme.buttonBlue};
		font-size: 14px;
		margin-left: 10px;
	}
	span {
		font-size: 12px;
		color: gray;
	}
`;

export const CsSpan = styled.span`
	padding: 10px;
	line-height: 15px;
	font-weight: 300;
	font-size: 10px;
	color: ${({color}) => color};
`;

export const CsSpanF = ({text, color}, props) => {
	return (
		<CsSpan color={color} {...props}>
			{text}
		</CsSpan>
	);
};

export const CsErrors = styled.div`
	display: flex;
	flex-direction: column;
`;
export const CsBold = styled.span`
	font-weight: 600;
`;

const CsImg = styled.img`
	width: ${({size}) => (size === 'large' ? '35px' : '25px')};
	height: ${({size}) => (size === 'large' ? '35px' : '25px')};
	border-radius: 50%;
	overflow: hidden;
`;

export const CsAvatarF = ({url = '', size}) => {
	if (url) {
		const URL = url?.split('//');

		return <CsImg size={size} src={'http://127.0.0.1:8887/' + URL[1]} alt={'avatar'} />;
	}
	return (
		<CsSpan>
			<FontAwesomeIcon icon={faUser} size='2x' />
		</CsSpan>
	);
};
