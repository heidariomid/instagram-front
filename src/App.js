import Router from './routes/Router';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import {client, isDarkVar} from './apollo';
import {ThemeProvider} from 'styled-components';
import {darkTheme} from './styles/dark';
import {lightTheme} from './styles/light';
import {GlobalStyles} from './styles/global';
import {HelmetProvider} from 'react-helmet-async';

const App = () => {
	const isDark = useReactiveVar(isDarkVar);
	return (
		<>
			<ApolloProvider client={client}>
				<HelmetProvider>
					<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
						<GlobalStyles />
						<Router />
					</ThemeProvider>
				</HelmetProvider>
			</ApolloProvider>
		</>
	);
};

export default App;
