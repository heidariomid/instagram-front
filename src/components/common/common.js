import styled from 'styled-components';
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
	width: 100%;
	margin-top: 22px;
	background-color: ${({theme}) => theme.buttonBlue};
	color: white;
	text-align: center;
	padding: 8px 0px;
	border: none;
	font-weight: 500;
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
	border: 0.5px solid ${({theme}) => theme.borderGrey};
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
`;
