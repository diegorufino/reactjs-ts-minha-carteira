import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalSyles from './styles/GlobalSyles';

import Routes from './routes';

import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalSyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;