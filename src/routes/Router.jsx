import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import {isLoginVar} from '../apollo';
import {useReactiveVar} from '@apollo/client';
import {ThemeProvider} from 'styled-components';
import {darkTheme} from '../styles/dark';
import {lightTheme} from '../styles/light';
import {GlobalStyles} from '../styles/global';
import SignUp from '../pages/SignUp';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);
	const [isDark, setIsDark] = useState(false);
	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyles />
				<button onClick={() => setIsDark((toggleTheme) => !toggleTheme)}>toggle theme</button>
				<button onClick={() => isLoginVar(!isLoggedIn)}> toggle user</button>
				<Switch>
					<Route exact path='/'>
						{isLoggedIn ? <Home /> : <Login />}
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					{!isLoggedIn && (
						<Route path='/signup'>
							<SignUp />
						</Route>
					)}
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</ThemeProvider>
		</>
	);
};

export default Router;
