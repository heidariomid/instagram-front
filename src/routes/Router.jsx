import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import {isLoginVar} from '../apollo';
import {useReactiveVar} from '@apollo/client';
import SignUp from '../pages/SignUp';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Profile from '../pages/Profile';

const Router = () => {
	const isLoggedIn = useReactiveVar(isLoginVar);
	return (
		<Switch>
			<Route exact path='/'>
				{isLoggedIn ? (
					<Layout>
						<Home />
					</Layout>
				) : (
					<Header />
				)}
			</Route>
			<Route path='/login'>
				<Login />
			</Route>

			{!isLoggedIn && (
				<Route path='/signup'>
					<SignUp />
				</Route>
			)}
			<Layout>
				<Route path='/user/:username'>
					<Profile />
				</Route>
			</Layout>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default Router;
