import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faCompass, faUser, faMoon, faSun, faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import {faHome, faPlus, faSignOut, faUpload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useMutation, useReactiveVar} from '@apollo/client';
import {isDarkVar, isLoginVar, themeHandler, userLoggedOut} from '../../apollo';
import {CsHeader, CsWrapper, CsColumn, CsSpan, CsButton} from '../../styles/header';
import useUser from '../../hooks/useUser';
import {Link} from 'react-router-dom';
import {CsAvatarF} from '../../styles/common';
import {client, uploadPhotoHandler} from '../../services/uploadFile';
import {SEE_FEED} from '../../graphql/queries';
import {UPLOAD_PHOTO} from '../../graphql/mutations';
const Header = () => {
	const currentTheme = useReactiveVar(isDarkVar);
	const isLoggedIn = useReactiveVar(isLoginVar);
	const {data} = useUser();
	const [uploadPhoto] = useMutation(UPLOAD_PHOTO, {refetchQueries: [{query: SEE_FEED}]});

	return (
		<CsHeader>
			<CsWrapper>
				<CsColumn>
					<Link to={'/'}>
						<FontAwesomeIcon icon={faInstagram} size='2x' />
					</Link>
				</CsColumn>
				{/* <CsSpan>{data?.userInfo ? `Welcome ${data?.userInfo?.userName}` : null}</CsSpan> */}
				{isLoggedIn ? (
					<CsColumn>
						<CsSpan onClick={() => userLoggedOut()}>
							<FontAwesomeIcon icon={faSignOut} />
						</CsSpan>
						<CsSpan onClick={() => themeHandler(currentTheme)}>
							<FontAwesomeIcon icon={currentTheme ? faSun : faMoon} />
						</CsSpan>
						<CsSpan onClick={() => uploadPhotoHandler(uploadPhoto)}>
							<FontAwesomeIcon icon={faSquarePlus} />
						</CsSpan>
						<CsSpan>
							<Link to={'/'}>
								<FontAwesomeIcon icon={faHome} />
							</Link>
						</CsSpan>
						<CsSpan>
							<FontAwesomeIcon icon={faCompass} />
						</CsSpan>
						{data?.userInfo?.avatar ? (
							<CsSpan>
								<Link to={`/user/${data?.userInfo?.userName}`}>
									<CsAvatarF url={data?.userInfo?.avatar} />
								</Link>
							</CsSpan>
						) : (
							<CsSpan>
								<FontAwesomeIcon icon={faUser} />
							</CsSpan>
						)}
					</CsColumn>
				) : (
					<Link to='/login'>
						<CsButton>Login</CsButton>
					</Link>
				)}
			</CsWrapper>
		</CsHeader>
	);
};

export default Header;
