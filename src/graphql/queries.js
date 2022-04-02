import {gql} from '@apollo/client';
import {COMMENT_FRAGMENT, PHOTO_FEAGMENT} from './sharedQuery';

export const USER_QUERY = gql`
	query {
		userInfo {
			id
			userName
			email
			avatar
			totalFollowers
			totalFollowing
			isFollowing
		}
	}
`;
export const USERS_QUERY = gql`
	query {
		users {
			id
			userName
			avatar
			isFollowing
		}
	}
`;
export const USER_PROFILE = gql`
	query UserProfile($username: String!) {
		userProfile(userName: $username) {
			isUserExist
			message
			user {
				id
				userName
				firstName
				lastName
				bio
				avatar
				totalFollowing
				totalFollowers
				isMe
				isFollowing
				photos {
					...PhotoFragment
				}
			}
		}
	}
	${PHOTO_FEAGMENT}
`;

export const SEE_FEED = gql`
	query {
		seeFeed {
			...PhotoFragment
			comments {
				...CommentFragment
			}

			user {
				avatar
				userName
				id
				photos {
					...PhotoFragment
					user {
						id
					}
				}
			}
		}
	}
	${PHOTO_FEAGMENT}
	${COMMENT_FRAGMENT}
`;
