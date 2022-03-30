import {gql, useMutation, useQuery} from '@apollo/client';
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useParams} from 'react-router-dom';
import {TOGGLE_FOLLOW_STATUS} from '../graphql/mutations';
import {USER_PROFILE} from '../graphql/queries';
import useUser from '../hooks/useUser';
import {CsProfileAvatar, CsProfileButton, CsProfileColumn, CsProfileGrid, CsProfileHeader, CsProfileIcon, CsProfileIcons, CsProfileItem, CsProfileList, CsProfilePhoto, CsProfileRow, CsProfileUsername, CsProfileValue} from '../styles/Profile';
import {PageTitle} from '../utils/PageTitle';

const Profile = () => {
	const {username} = useParams();
	const {data: info} = useUser();

	const {data, loading} = useQuery(USER_PROFILE, {variables: {username}});
	const userInfo = data?.userProfile;

	const updateFollowStatus = (cache, result) => {
		const {isToggleSuccess} = result?.data?.toggleFollowStatus;
		if (isToggleSuccess) {
			cache.modify({
				id: `User:${userInfo?.user?.userName}`,
				fields: {
					isFollowing(prev) {
						return !prev;
					},
					totalFollowers(prev) {
						if (userInfo?.user?.isFollowing) {
							return prev - 1;
						} else {
							return prev + 1;
						}
					},
				},
			});
			cache.modify({
				id: `User:${info?.userInfo?.userName}`,
				fields: {
					totalFollowing(prev) {
						if (info?.userInfo?.isFollowing) {
							return prev - 1;
						} else {
							return prev + 1;
						}
					},
				},
			});
		} else {
			return;
		}
	};
	const [toggleFollowHandler] = useMutation(TOGGLE_FOLLOW_STATUS, {variables: {userName: userInfo?.user?.userName}, update: updateFollowStatus});

	if (!userInfo?.isUserExist) {
		return <div>{userInfo?.message} </div>;
	}

	const AvatarURL = userInfo?.user?.avatar.split('//');

	const Buttom = ({handler, value}) => (
		<CsProfileButton onClick={handler} isFollowing={userInfo?.user?.isFollowing}>
			{value}
		</CsProfileButton>
	);
	const FollowButton = (userInfo) => {
		if (userInfo?.user?.isMe) {
			return <Buttom value='Edit Profile' />;
		}
		if (userInfo?.user?.isFollowing) {
			return <Buttom value='Unfollow' handler={toggleFollowHandler} />;
		} else {
			return <Buttom value='Follow' handler={toggleFollowHandler} />;
		}
	};

	return (
		<div>
			<PageTitle title={loading ? 'Loading....' : `${userInfo?.user?.userName}'s Profile`} />
			<CsProfileHeader>
				<CsProfileAvatar src={process.env.REACT_APP_PHOTO_URL + AvatarURL[1]} />
				<CsProfileColumn>
					<CsProfileRow>
						<CsProfileUsername>{userInfo?.user?.userName}</CsProfileUsername>
					</CsProfileRow>
					<CsProfileRow>
						<CsProfileList>
							<CsProfileItem>
								<span>
									<CsProfileValue>{userInfo?.user?.totalFollowers}</CsProfileValue> follower
								</span>
							</CsProfileItem>
							<CsProfileItem>
								<span>
									<CsProfileValue>{userInfo?.user?.totalFollowing}</CsProfileValue> following
								</span>
							</CsProfileItem>
						</CsProfileList>
					</CsProfileRow>

					<CsProfileRow>{userInfo?.user?.bio}</CsProfileRow>
					<CsProfileRow>{FollowButton(userInfo)}</CsProfileRow>
				</CsProfileColumn>
			</CsProfileHeader>

			<CsProfileGrid>
				{userInfo?.user?.photos?.map((photo) => {
					const URL = photo?.file?.split('//');

					return (
						<CsProfilePhoto url={URL.length > 1 ? URL[1] : '13-no-image-available.jpg'} key={photo?.id}>
							<CsProfileIcons>
								<CsProfileIcon>
									<FontAwesomeIcon icon={faHeart} />
									{photo?.likes}
								</CsProfileIcon>
								<CsProfileIcon>
									<FontAwesomeIcon icon={faComment} />
									{photo?.commentsNumber}
								</CsProfileIcon>
							</CsProfileIcons>
						</CsProfilePhoto>
					);
				})}
			</CsProfileGrid>
		</div>
	);
};

export default Profile;
