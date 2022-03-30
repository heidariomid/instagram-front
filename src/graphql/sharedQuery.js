import {gql} from '@apollo/client';

export const PHOTO_FEAGMENT = gql`
	fragment PhotoFragment on Photo {
		file
		id
		caption
		commentsNumber
		likes
		isLiked
		createdAt
	}
`;
export const COMMENT_FRAGMENT = gql`
	fragment CommentFragment on Comment {
		id
		payload
		createdAt
		isMine
		user {
			userName
			avatar
		}
	}
`;
