import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {CsButton, CsInput, CsTopBox, CsWrapper, CsSpan, CsContainer, CsButtomBox} from '../components/common/common';

const SignUp = () => {
	return (
		<CsContainer>
			<CsWrapper>
				<CsTopBox>
					<div>
						<FontAwesomeIcon icon={faInstagram} size={'3x'} />
					</div>
					<form>
						<CsInput type='text' placeholder='Mobile Number or Email' />
						<CsInput type='text' placeholder='Full Name' />

						<CsInput type='text' placeholder='username' />
						<CsInput type='password' placeholder='password' />

						<CsButton type='submit' value='Sign Up' />
					</form>
					<CsSpan>By siging up,you agree to our Terms,Data Policy and Cookies Policy .</CsSpan>
				</CsTopBox>
				<CsButtomBox>
					<span>Have an account?</span>
					<Link to={'/login'}>Log In</Link>
				</CsButtomBox>
			</CsWrapper>
		</CsContainer>
	);
};

export default SignUp;
