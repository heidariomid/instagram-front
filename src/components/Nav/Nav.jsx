import {Link} from 'react-router-dom';
import styled from 'styled-components';
const CsNav = styled.nav`
	display: flex;
	width: 100%;
	font-size: 12px;
`;
const Router = () => {
	return (
		<CsNav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</CsNav>
	);
};

export default Router;
