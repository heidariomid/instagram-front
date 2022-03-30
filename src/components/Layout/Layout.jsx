import styled from 'styled-components';
import Header from './Header';
import Nav from '../Nav/Nav';
import {CsMain} from '../../styles/common';

const Layout = ({children}) => {
	return (
		<>
			{/* <Nav /> */}
			<Header />
			<CsMain>{children}</CsMain>
		</>
	);
};

export default Layout;
