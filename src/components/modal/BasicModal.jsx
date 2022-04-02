import {useMutation} from '@apollo/client';
import {faCopy, faPaperPlane, faSave} from '@fortawesome/free-regular-svg-icons';
import {faClose, faDeaf, faDeleteLeft, faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {DELETE_PHOTO} from '../../graphql/mutations';
import {SEE_FEED} from '../../graphql/queries';

const CsModalContainer = styled.div`
	position: absolute;
	width: 929px;
	height: 840px;
	display: flex;

	background: rgba(0, 0, 0, 0.6);
	justify-content: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

	align-items: center;
	z-index: 9999;
`;
const CsModalWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	color: #2a2a2a;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const CsModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20%;
	line-height: 1.8;
	color: #1e1e1e;

	transition: all 1.3s ease-in-out;
`;

const CsModalButton = styled.button`
	cursor: pointer;
	display: flex;
	width: 230px;
	height: 40px;
	padding: 30px;
	margin-bottom: 20px;
	justify-content: space-around;
	align-items: center;
	background: #ffffff;
	border: none;
	&:hover {
		background: rgb(234, 234, 234);
		div {
			color: black;
		}
		svg {
			color: black;
		}
	}
`;
const CsModalSpan = styled.div`
	color: #3e3e3e;
	flex: 1;
	font-size: 14px;
	align-self: center;
`;
const BasicModal = ({showModal, setShowModal, photoId}) => {
	const [deletePhoto] = useMutation(DELETE_PHOTO, {variables: {photoId}, refetchQueries: [{query: SEE_FEED}]});
	const deletePhotoHandler = () => {
		deletePhoto();
		setShowModal(false);
	};
	return (
		<>
			{showModal && (
				<CsModalContainer>
					<CsModalWrapper>
						<CsModalContent>
							<IconButton icon={faShare} text={'Share to'} onClick={() => console.log('hi')} />
							<IconButton icon={faSave} text={'Save'} />
							<IconButton icon={faCopy} text={'Copy Link'} />
							<IconButton icon={faDeaf} text={'Report'} />
							<IconButton icon={faClose} text={'Delete'} onClick={deletePhotoHandler} />
						</CsModalContent>
					</CsModalWrapper>
				</CsModalContainer>
			)}
		</>
	);
};
export default BasicModal;

const IconButton = ({icon, text, onClick}) => {
	return (
		<CsModalButton onClick={onClick}>
			<div>
				<FontAwesomeIcon icon={icon} color={'grey'} />
			</div>
			<CsModalSpan>{text}</CsModalSpan>
		</CsModalButton>
	);
};
