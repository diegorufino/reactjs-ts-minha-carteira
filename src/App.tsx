import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalSyles from './styles/GlobalSyles';

import Layout from './components/Layout';
import List from './pages/List';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalSyles />
            <Layout>
                <List />
            </Layout>
        </ThemeProvider>
    )
}

export default App;