import {CsAvatarF} from '../../styles/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark, faComment, faHeart, faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {PhotoContainer, PhotoAction, PhotoActions, PhotoHeader, PhotoInfo, UserName, CsImg, Likes, CsPhoto} from '../../styles/Photo';
import {gql, useMutation} from '@apollo/client';
import {LIKE_PHOTO} from '../../graphql/mutations';
import Comments from '../Comments/Comments';
import {Link} from 'react-router-dom';

const Photo = (photo) => {
	const updateLikePhoto = (cache, result) => {
		const {isLikeSuccess} = result?.data?.likePhoto;
		//1- New way with apollo
		if (isLikeSuccess) {
			cache.modify({
				id: `Photo:${photo?.id}`,
				fields: {
					isLiked(prevIsLiked) {
						return !prevIsLiked;
					},
					likes(prevLikes) {
						return prevLikes ? prevLikes - 1 : prevLikes + 1;
					},
				},
			});
		}
		// 2- Old way with stream
		// if (isLikeSuccess) {
		// 	cache.writeFragment({
		// 		id: `Photo:${photo?.id}`,
		// 		fragment: gql`
		// 			fragment BSName on Photo {
		// 				isLiked
		// 				likes
		// 			}
		// 		`,
		// 		data: {isLiked: !photo?.isLiked, likes: photo?.isLiked ? photo.likes - 1 : photo.likes + 1},
		// 	});
		// }
	};
	const [toggleLikeHandler] = useMutation(LIKE_PHOTO, {variables: {likePhotoId: photo?.id}, update: updateLikePhoto});

	return (
		<PhotoContainer key={photo?.id}>
			{/* photo Header */}
			<PhotoHeader>
				<Link to={`/user/${photo?.user?.userName}`}>
					<CsAvatarF url={photo?.user?.avatar} size={'large'} />
				</Link>
				<Link to={`/user/${photo?.user?.userName}`}>
					<UserName>{photo?.user?.userName}</UserName>
				</Link>
			</PhotoHeader>
			{/* photo Body */}
			<CsPhoto photo={photo} />
			<PhotoInfo>
				<PhotoActions>
					<div>
						<PhotoAction onClick={toggleLikeHandler}>
							<FontAwesomeIcon icon={photo?.isLiked ? faHeartSolid : faHeart} style={{color: photo?.isLiked ? 'red' : 'inherit'}} />
						</PhotoAction>
						<PhotoAction>
							<FontAwesomeIcon icon={faComment} />
						</PhotoAction>
						<PhotoAction>
							<FontAwesomeIcon icon={faPaperPlane} />
						</PhotoAction>
					</div>
					<div>
						<PhotoAction>
							<FontAwesomeIcon icon={faBookmark} />
						</PhotoAction>
					</div>
				</PhotoActions>
				<Likes>{photo?.likes === 1 ? '1 like' : ` ${photo?.likes}  likes`}</Likes>
				{/* Comments */}
				{photo && <Comments {...photo} />}
			</PhotoInfo>
		</PhotoContainer>
	);
};

export default Photo;
