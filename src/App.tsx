import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalSyles from './styles/GlobalSyles';

import Layout from './components/Layout';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalSyles />
            <Layout />
        </ThemeProvider>
    )
}

export default App;