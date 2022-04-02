import styled from 'styled-components';
import {CsBold} from './common';

export const PhotoContainer = styled.div`
	background-color: white;
	border: 1px solid ${({theme}) => theme?.borderColor};
	margin-bottom: 20px;
	min-width: 100%;
	overflow: hidden;
`;

export const PhotoHeader = styled.div`
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const CsImg = styled.img`
	min-width: 100%;
	height: 840px;
	object-fit: cover;
	object-position: 100%;
	/* background-image: url(${({bg}) => bg}); */
	background-size: cover;
	position: relative;
`;

export const UserName = styled(CsBold)`
	margin-left: 15px;
`;

export const PhotoInfo = styled.div`
	padding: 15px;
`;
export const PhotoActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		display: flex;
		align-items: center;
	}
	svg {
		font-size: 30px;
	}
`;
export const PhotoAction = styled.div`
	margin-right: 20px;
	cursor: pointer;
`;

export const Likes = styled.span`
	font-weight: 600;
	margin-top: 10px;
	display: block;
`;

export const CsPhoto = ({photo}) => {
	return (
		<div>
			<CsImg key={photo?.id} src={photo?.file} alt={'photo'} />
		</div>
	);
};
