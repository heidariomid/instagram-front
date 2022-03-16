import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import {isLoginVar} from '../apollo';
import {useReactiveVar} from '@apollo/client';
import SignUp from '../pages/SignUp';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);

	return (
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
	);
};

export default Router;
