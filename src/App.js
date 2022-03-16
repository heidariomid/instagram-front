import Router from './routes/Router';
import Nav from './routes/Nav';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import {client, isLoginVar} from './apollo';
import {ThemeProvider} from 'styled-components';
import {darkTheme} from './styles/dark';
import {lightTheme} from './styles/light';
import {GlobalStyles} from './styles/global';
import {HelmetProvider} from 'react-helmet-async';
import {useState} from 'react';
const App = () => {
	const [isDark, setIsDark] = useState(false);
	const isLoggedIn = useReactiveVar(isLoginVar);

	return (
		<>
			<ApolloProvider client={client}>
				<HelmetProvider>
					<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
						<GlobalStyles />
						<button onClick={() => setIsDark((toggleTheme) => !toggleTheme)}>toggle theme</button>
						<button onClick={() => isLoginVar(!isLoggedIn)}> toggle user</button>
						<Nav />
						<Router />
					</ThemeProvider>
				</HelmetProvider>
			</ApolloProvider>
		</>
	);
};

export default App;
