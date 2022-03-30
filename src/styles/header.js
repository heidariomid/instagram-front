import styled from 'styled-components';

export const CsHeader = styled.header`
	width: 100%;
	border-bottom: 1px solid ${({theme}) => theme?.borderColor};
	background-color: ${({theme}) => theme?.bgColor};
	padding: 18px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const CsWrapper = styled.div`
	width: 100%;
	max-width: 930px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const CsColumn = styled.div`
	display: flex;
	align-items: center;
`;
export const CsSpan = styled.span`
	margin-left: 15px;
`;
export const CsButton = styled.button`
	cursor: pointer;
	width: 60px;
	border-radius: 6px;
	background-color: ${({theme}) => theme.buttonBlue};
	color: white;
	text-align: center;
	padding: 8px 0px;
	border: none;
	font-weight: 500;
	a {
		color: white;
	}
`;
